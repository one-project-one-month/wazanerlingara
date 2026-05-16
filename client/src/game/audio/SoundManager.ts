export class SoundManager {
  private ctx = new AudioContext();
  private buffers: Record<string, AudioBuffer> = {};

  private activeSources: Record<string, AudioBufferSourceNode> = {};
  private startTimes: Record<string, number> = {};
  private pausedAt: Record<string, number> = {};

  async load(files: Record<string, string>) {
    const entries = Object.entries(files);
    const promises = entries.map(async ([key, url]) => {
      const response = await fetch(url);
      const data = await response.arrayBuffer();
      this.buffers[key] = await this.ctx.decodeAudioData(data);
    });

    await Promise.all(promises);
  }

  play(name: string, volume: number = 1, loop: boolean = false) {
    const buffer = this.buffers[name];
    if (!buffer) return;
    // Stop if already playing to reset the sound
    this.stop(name);

    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();

    source.buffer = buffer;
    source.loop = loop;
    gain.gain.value = volume;

    source.connect(gain);
    gain.connect(this.ctx.destination);

    source.start(0);
    this.activeSources[name] = source;
    this.startTimes[name] = this.ctx.currentTime;
    this.pausedAt[name] = 0;
  }

  pause(name: string) {
    const source = this.activeSources[name];
    if (!source) return;

    const elapsed = this.ctx.currentTime - this.startTimes[name];
    this.pausedAt[name] = elapsed;

    source.stop();
    delete this.activeSources[name];
  }

  stop(name: string) {
    const source = this.activeSources[name];
    if (source) {
      source.stop();
      delete this.activeSources[name];
    }
    this.pausedAt[name] = 0;
  }

  resume() {
    this.ctx.resume();
  }
}
