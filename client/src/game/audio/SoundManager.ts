export class SoundManager {
  private ctx = new AudioContext();
  private buffers: Record<string, AudioBuffer> = {};

  async load(files: Record<string, string>) {
    const entries = Object.entries(files);
    const promises = entries.map(async ([key, url]) => {
      const response = await fetch(url);
      const data = await response.arrayBuffer();
      this.buffers[key] = await this.ctx.decodeAudioData(data);
    });

    await Promise.all(promises);
  }

  play(name: string, volume: number = 1) {
    const buffer = this.buffers[name];
    if (!buffer) return;

    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();

    source.buffer = buffer;
    source.connect(this.ctx.destination);

    gain.gain.value = volume;
    source.connect(gain);

    gain.connect(this.ctx.destination);
    source.start();
  }

  resume() {
    this.ctx.resume();
  }
}
