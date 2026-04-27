import BackButton from "@/components/common/back-button"

const HowToPlay = () => {
    return (
        <section className="relative ">
            <div className="flex gap-4 mb-8">
                <BackButton className="md:hidden" />
                <h1 className="text-heading-4 flex-1 text-center">ဘယ်လိုကစားရမလဲ</h1>
            </div>
            <div className="space-y-4">
                <p className="text-body-1">
                    ကစားပွဲတစ်ခု စတင်ရင် "စကစားကြမယ်"ကိုနှိပ်ပြီး ကစားမည့်သူများ၏ အမည်များကို ထည့်ပါ။ အနည်းဆုံး သုံးယောက်မှ အများဆုံး ဆယ်ယောက်အထိ ပါဝင်ကစားနိုင်ပါသည်။
                    အားလုံးက ဖုန်းတစ်လုံးတည်းကိုပဲ အသုံးပြုပြီး မိမိတို့ရဲ့ Roleကို သူများမမြင်အောင် အလှည့်ကျ ကြည့်ရပါမယ်။

                </p>
                <p className="text-body-1">

                    ကစားသမားအများစုက တူညီတဲ့ စကားလုံးတစ်လုံးတည်းကိုပဲ ရရှိပါမယ်။ Imposterကတော့ ဘာစကားလုံးမှ ရရှိမှာ မဟုတ်ပါဘူး။
                    (Hostက ခွင့်ပြုထားရင်တော့ Imposter အတွက် Hint ရနိုင်ပါတယ်။) မိမိရထားသော keywordကို မှတ်ထားပြီး လျှို့ဝှက်ထားပါ။

                </p>
                <p className="text-body-1">

                    ကစားသမားတွေက အလှည့်ကျစနစ်ဖြင့် မိမိရထားသော keywordနဲ့ ပတ်သက်တဲ့အရာတွေကို သတ်မှတ်ချိန်အတွင်းမှာ တိုတိုတုတ်တုတ် ပြောရပါမယ်။
                    <span className="text-primary-400"> keywordကို လုံးဝ(လုံးဝ) မပြောရပါဘူး။</span>

                </p>
                <p className="text-body-1">

                    Imposter ကတော့ keywordကို သိချင်ယောင်ဆောင်ပြီး သံသယအဝင်မခံရအောင် သူများတွေ ပြောသွားတာကို သေချာနားထောင်ပြီး ခန့်မှန်းပြောရပါမယ်။

                </p>
                <p className="text-body-1">

                    အားလုံး ပြောပြီးသွားတဲ့အခါ ဘယ်သူက Imposter ဖြစ်နိုင်မလဲ၊ ဘယ်သူ့စကားတွေက မသင်္ကာစရာ ကောင်းနေလဲဆိုတာကို ဝိုင်းဝန်းဆွေးနွေးရပါမယ်။

                </p>
                <p className="text-body-1">
                    ကစားသမားအားလုံးက Imposterလို့ ထင်ရတဲ့သူကို မဲပေးရပါမယ်။ မဲပေးခံရသူက တကယ့် Imposter ဖြစ်နေရင် Teammatesတွေ အနိုင်ရပါမယ်။
                    မဲပေးခံရသူက Imposterမဟုတ်ဘူးဆိုရင်တော့ Imposterက အနိုင်ရသွားပါမယ်။</p>

            </div>


        </section>
    )
}

export default HowToPlay