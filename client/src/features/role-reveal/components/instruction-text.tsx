interface Props {
  confirmed: boolean;
}

export default function InstructionText({ confirmed }: Props) {
  return (
    <p className="text-center text-sm md:text-base text-gray-300 px-4">
      {!confirmed ? (
        <>
          ကိုယ့် role ကို ကြည့်ဖို့ ကတ် ကို ထိ ပါ။ <br />
          အချိန် (၁၀) စက္ကန့် သာရပါမယ်။ ပြန်ကြည့် ခွင့် မရှိပါ။
        </>
      ) : (
        <>ပြန်ကြည့် ခွင့် မရှိပါ။</>
      )}
    </p>
  );
}
