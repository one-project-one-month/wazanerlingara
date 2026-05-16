import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Progress from "@/components/ui/progress";
import Switch from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useGameSfxStore } from "@/stores/game-sfx-store";
import { useState } from "react";

function Test() {
  const [check, setCheck] = useState(false);

  const play = useGameSfxStore.getState().play;

  return (
    <div className="p-5 bg-background-900 space-y-4">
      <Input type="text" placeholder="Test" />
      <Input type="text" placeholder="Test" variant="success" />
      <Input type="text" placeholder="Test" variant="error" />
      <Input type="text" placeholder="Test" disabled />
      <Button onClick={() => play("click", 1, false)}>Primary</Button>
      <Button disabled>Secondary</Button>
      <Button variant="outline">Tertiary</Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Textarea placeholder="Test" rows={2} />
      <div className="card-body">Hello</div>
      <Progress value={Math.random() * 100} max={100} />
      <Switch
        checked={check}
        onChange={() => {
          play("click", 0.5, false);
          setCheck(!check);
        }}
      />
    </div>
  );
}

export default Test;
