import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Switch from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function Test() {
  const [check, setcheck] = useState(false)
  return (
    <div className="p-5 bg-background-900 space-y-4">
      <Input type="text" placeholder="Test" />
      <Input type="text" placeholder="Test" variant="success" />
      <Input type="text" placeholder="Test" variant="error" />
      <Input type="text" placeholder="Test" disabled />
      <Button>Primary</Button>
      <Button disabled>Secondary</Button>
      <Button variant="outline">Tertiary</Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Textarea placeholder="Test" rows={2} />
      <div className="card-body">Hello</div>
      <Switch checked={check} onChange={setcheck} />
    </div>
  );
}

export default Test;
