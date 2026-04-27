import BackButton from "@/components/common/back-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import ResponseModel from "../components/response-model"

const ContactUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOpen(true)
    }
    return (
        <section className="relative" onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-8">
                <BackButton className="md:hidden" />
                <h1 className="text-heading-4 flex-1 text-center">ဆက်သွယ်ရန်</h1>
            </div>
            <form className="flex flex-col gap-4">
                <Input
                    type="text"
                    label="အမည်"
                    placeholder="မောင်ဒိုင်နို"
                />
                <Input
                    type="email"
                    label="အီးမေးလ လိပ်စာ"
                    description="သင့်ထံသို့ ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ အသုံးပြုပါမည်။"
                    placeholder="jurassic@gmail.com"
                />
                <Textarea
                    label="မက်ဆေ့ချ်"
                    description="စာကို အရှည်ကြီး မရေးပါနဲ့ ဖတ်ရမှာ ပျင်းလို့ 😔"
                    placeholder="ဤစာသားသည် ဒီဇိုင်းတစ်ခု၏ စာလုံးအသားပေးပုံစံကို ကြည့်ရှုစစ်ဆေးရန်အတွက် အသုံးပြုသော နမူနာစာသားသာ ဖြစ်ပါသည်။ စာဖတ်သူအနေဖြင့် အဓိပ္ပာယ်ကို အာရုံစိုက်ရန်မလိုဘဲ စာလုံးစီပုံနှင့် အထားအသိုကိုသာ ကြည့်ရှုနိုင်ရန် ရည်ရွယ်ပါသည်။"
                />
                <Button
                    type="submit"
                >
                    ‌ပေးပို့မယ်
                </Button>
            </form>
            <ResponseModel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                isSuccess={true}
            />

        </section>
    )
}

export default ContactUs