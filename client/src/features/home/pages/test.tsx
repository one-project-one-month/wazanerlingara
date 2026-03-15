import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Test() {
  return (
    <div className="p-5 bg-background-900 space-y-4">
      <Input type="text" placeholder="Test" />
      <Input type="text" placeholder="Test" variant="success" />
      <Input type="text" placeholder="Test" variant="error" />
      <Input type="text" placeholder="Test" disabled />
      <Button>Test</Button>
      <Button disabled>Test</Button>
      <Button variant="outline">Test</Button>
      <Button variant="outline" disabled>
        Test
      </Button>
      <Textarea placeholder="Test" rows={2} />
      <div className="card-body">Hello</div>
    </div>
  );
}

export default Test;
