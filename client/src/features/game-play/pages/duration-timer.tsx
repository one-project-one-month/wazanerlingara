import { Button } from "@/components/ui/button"
import CircularTimer from "@/components/ui/circular-timer"

const DurationTimer = () => {
  return (
       <div className="flex flex-col h-screen w-full items-center p-4 gap-y-6">
      
      <div className="flex justify-end w-full">
        <Button variant="outline" className="text-4xl">X</Button>
      </div>

 
      <div className="flex flex-col items-center gap-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-bold">အမျိုးအစား:</h3>
          <span>အစားအသောက်</span>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold">Imposter အရေအတွက်:</h3>
          <span>(၁) ယောက်</span>
        </div>
        
      </div>

      <CircularTimer totalTime={156} />


      <div className="mt-auto w-full flex justify-center items-center gap-4 pb-6">
        <Button variant="default" className="w-full px-1.5">
          မဲပေးမယ်
        </Button>
        <Button variant="outline" className="w-full px-1.5">
          ကစားမယ်
        </Button>
      </div>

    </div>
  )
}

export default DurationTimer