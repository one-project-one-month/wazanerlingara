import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import avatar1 from "@/assets/svg/role-reveal-screen/Avatar1.svg";
import avatar2 from "@/assets/svg/role-reveal-screen/Avatar2.svg";
import avatar3 from "@/assets/svg/role-reveal-screen/Avatar3.svg";
import avatar4 from "@/assets/svg/role-reveal-screen/Avatar4.svg";
import NextPlayerCountdown from "@/features/role-reveal/components/next-player-countdown.tsx";
import TopSection from "@/features/role-reveal/components/top-section.tsx";
import RoleCard from "@/features/role-reveal/components/role-card.tsx";
import InstructionText from "@/features/role-reveal/components/instruction-text.tsx";
import BottomSection from "@/features/role-reveal/components/bottom-section.tsx";
import ExitModal from "@/features/role-reveal/components/exit-modal.tsx";

const roles = [
  { role: "Imposter", word: null },
  { role: "Player", word: "Apple" },
  { role: "Player", word: "Apple" },
  { role: "Player", word: "Apple" },
];

const players = [
  { name: "Player 1", avatar: avatar1 },
  { name: "Player 2", avatar: avatar2 },
  { name: "Player 3", avatar: avatar3 },
  { name: "Player 4", avatar: avatar4 },
];

export default function RoleRevealPage() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [revealed, setRevealed] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showNextCountdown, setShowNextCountdown] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const current = roles[currentPlayer];
  const player = players[currentPlayer];
  const nextPlayer = players[currentPlayer + 1];

  // TIMER (unchanged)
  useEffect(() => {
    if (timeLeft <= 0) {
      if (!confirmed) {
        handleConfirm();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, confirmed]);

  // LOGIC (unchanged)
  const handleCardClick = () => {
    if (timeLeft <= 0 || revealed || showBlur || confirmed) return;
    setShowBlur(true);
  };

  const handleReveal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    setShowBlur(false);
    setRevealed(true);

    if (cardRef.current) {
      animate(cardRef.current, {
        rotateY: [90, 0],
        opacity: [0, 1],
        duration: 400,
      });
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setRevealed(false);
    setShowBlur(false);
  };

  const handleNextPlayerCountdownDone = () => {
    setShowNextCountdown(false);

    setIsResetting(true);
    setCurrentPlayer((p) => p + 1);
    setTimeLeft(10);
    setRevealed(false);
    setShowBlur(false);
    setConfirmed(false);

    setTimeout(() => setIsResetting(false), 50);
  };

  return (
    <div className="min-h-[97vh] bg-black text-white flex flex-col justify-between px-4 py-5 md:py-10 md:px-8 lg:py-1">
      <div className="w-full md:max-w-175 lg:max-w-150 mx-auto flex flex-col flex-1 justify-between">
        {/* TOP */}
        <TopSection
          timeLeft={timeLeft}
          isResetting={isResetting}
          onBack={() => setShowExitModal(true)}
        />

        {/* CENTER */}
        <div className="flex-1 flex items-center justify-center py-4 md:py-6 lg:py-2">
          <div className="w-full flex flex-col items-center gap-6 lg:gap-3">
            {/* CATEGORY */}
            <p className="text-center text-sm md:text-lg text-gray-300">
              အမျိုးအစား - အစားအသောက်
            </p>

            {/* CARD */}
            <RoleCard
              currentPlayer={currentPlayer}
              player={player}
              current={current}
              revealed={revealed}
              showBlur={showBlur}
              confirmed={confirmed}
              timeLeft={timeLeft}
              onCardClick={handleCardClick}
              onReveal={handleReveal}
            />

            {/* INSTRUCTION */}
            <InstructionText confirmed={confirmed} />
          </div>
        </div>

        {/* BOTTOM */}
        <BottomSection
          currentPlayer={currentPlayer}
          rolesLength={roles.length}
          nextPlayer={nextPlayer}
          confirmed={confirmed}
          revealed={revealed}
          timeLeft={timeLeft}
          onConfirm={handleConfirm}
          onNext={() => setShowNextCountdown(true)}
        />

        {/* EXIT MODAL */}
        {showExitModal && <ExitModal onClose={() => setShowExitModal(false)} />}

        {/* NEXT COUNTDOWN */}
        {showNextCountdown && (
          <NextPlayerCountdown
            nextPlayer={nextPlayer}
            onDone={handleNextPlayerCountdownDone}
          />
        )}
      </div>
    </div>
  );
}

// export default function RoleRevealPage() {
//   const [currentPlayer, setCurrentPlayer] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(10);
//   const [revealed, setRevealed] = useState(false);
//   const [showBlur, setShowBlur] = useState(false);
//   const [showExitModal, setShowExitModal] = useState(false);
//   const [showNextCountdown, setShowNextCountdown] = useState(false);
//   const [isResetting, setIsResetting] = useState(false);
//   const [confirmed, setConfirmed] = useState(false);
//
//   const cardRef = useRef<HTMLDivElement | null>(null);
//
//   const current = roles[currentPlayer];
//   const player = players[currentPlayer];
//   const nextPlayer = players[currentPlayer + 1]; // next player
//
//   // TIMER
//   // useEffect(() => {
//   //     if (timeLeft <= 0) return;
//   //     const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
//   //     return () => clearInterval(timer);
//   // }, [timeLeft]);
//   useEffect(() => {
//     if (timeLeft <= 0) {
//       if (!confirmed) {
//         handleConfirm(); // auto confirm when time ends
//       }
//       return;
//     }
//
//     const timer = setInterval(() => {
//       setTimeLeft((t) => t - 1);
//     }, 1000);
//
//     return () => clearInterval(timer);
//   }, [timeLeft, confirmed]);
//
//   // useEffect(() => {
//   //     if (revealed) {
//   //         setTimeLeft(0);
//   //     }
//   // }, [revealed]);
//
//   const handleCardClick = () => {
//     if (timeLeft <= 0 || revealed || showBlur || confirmed) return;
//     setShowBlur(true);
//   };
//
//   const handleReveal = (e?: React.MouseEvent) => {
//     if (e) e.stopPropagation();
//
//     setShowBlur(false);
//     setRevealed(true);
//
//     if (cardRef.current) {
//       animate(cardRef.current, {
//         rotateY: [90, 0],
//         opacity: [0, 1],
//         duration: 400,
//       });
//     }
//   };
//
//   const handleConfirm = () => {
//     setConfirmed(true);
//     setRevealed(false);
//     setShowBlur(false);
//   };
//   const handleNextPlayerCountdownDone = () => {
//     setShowNextCountdown(false);
//     //
//     // if (currentPlayer + 1 >= roles.length) {
//     //     setGameFinished(true);
//     //     return;
//     // }
//
//     setIsResetting(true);
//     setCurrentPlayer((p) => p + 1);
//     setTimeLeft(10);
//     setRevealed(false);
//     setShowBlur(false);
//     setConfirmed(false);
//
//     setTimeout(() => setIsResetting(false), 50);
//   };
//   const progressPercent = (timeLeft / 10) * 100;
//
//   return (
//     <div className="min-h-[97vh] bg-black text-white flex flex-col justify-between px-4 py-5 md:py-10 md:px-8 lg:py-1">
//       <div className="w-full  md:max-w-175 lg:max-w-150 mx-auto flex flex-col flex-1 justify-between">
//         {/* TOP */}
//         <div className="w-full  ">
//           <div className="flex items-center gap-3">
//             <button onClick={() => setShowExitModal(true)}>
//               <img
//                 src={backIcon}
//                 alt="back"
//                 className="w-6 h-6 md:w-12 md:h-12"
//               />
//             </button>
//
//             {/* PROGRESS BAR */}
//             <div className="flex-1 h-4 md:h-7 lg:h-5 bg-gray-700 rounded-full overflow-hidden">
//               <div
//                 className={`h-full ${
//                   isResetting
//                     ? ""
//                     : "transition-[width] duration-1000 ease-linear"
//                 } ${timeLeft <= 3 ? "bg-red-500" : "bg-green-500"}`}
//                 style={{ width: `${progressPercent}%` }}
//               />
//             </div>
//           </div>
//         </div>
//
//         {/* ✅ CENTER GROUP (Tablet optimized) */}
//         <div className="flex-1 flex items-center justify-center py-4 md:py-6 lg:py-2">
//           <div className="w-full flex flex-col items-center gap-6 lg:gap-3">
//             {/* CATEGORY */}
//             <p className="text-center text-sm md:text-lg text-gray-300">
//               အမျိုးအစား - အစားအသောက်
//             </p>
//
//             {/* CARD */}
//             <div
//               key={currentPlayer}
//               onClick={handleCardClick}
//               className={`
//                         relative
//                         w-65 h-90
//                         md:w-95 md:h-130
//                         lg:w-60 lg:h-75
//                         rounded-[30px]
//                         flex items-center justify-center
//                         ${
//                           timeLeft <= 0 || confirmed
//                             ? "opacity-50 cursor-not-allowed"
//                             : "cursor-pointer"
//                         }
//                     `}
//             >
//               <div
//                 className="absolute inset-0 rounded-4xl pointer-events-none z-0
//                         shadow-[0_0_60px_rgba(255,255,255,0.25)]"
//               />
//               <div className="absolute inset-0 rounded-4xl border-[3px] border-white/60 z-10" />
//               <div className="absolute inset-2 rounded-[26px] border-2 border-white/40 z-10" />
//
//               <div className="absolute inset-3 rounded-3xl bg-black z-20 flex items-center justify-center overflow-hidden">
//                 <div ref={cardRef} className="flex flex-col items-center">
//                   {!revealed && (
//                     <>
//                       <img
//                         src={player.avatar}
//                         alt="avatar"
//                         className="w-30 h-30  md:w-44 md:h-44 object-contain mb-5"
//                       />
//                       <p className="text-[16px] md:text-lg text-white/90">
//                         {player.name}
//                       </p>
//                     </>
//                   )}
//
//                   {revealed && (
//                     <h2
//                       className={`text-2xl md:text-3xl font-semibold ${
//                         current.role === "Imposter"
//                           ? "text-red-500"
//                           : "text-white"
//                       }`}
//                     >
//                       {current.role === "Imposter" ? "Imposter" : current.word}
//                     </h2>
//                   )}
//                 </div>
//
//                 {/* BLUR */}
//                 {showBlur && !revealed && (
//                   <div
//                     onClick={(e) => handleReveal(e)}
//                     className="absolute inset-0 backdrop-blur-2xl z-130 flex items-center justify-center"
//                   >
//                     <div className="absolute inset-0 backdrop-blur-xl bg-white/5" />
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(0,0,0,0.6))]" />
//                     <div
//                       className="absolute inset-0 opacity-30 mix-blend-overlay
//                                     bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
//                     />
//
//                     <img src={viewButton} alt="view" />
//                   </div>
//                 )}
//               </div>
//             </div>
//
//             {/* INSTRUCTION */}
//             <p className="text-center text-sm md:text-base text-gray-300 px-4">
//               {!confirmed ? (
//                 <>
//                   ကိုယ့် role ကို ကြည့်ဖို့ ကတ် ကို ထိ ပါ။ <br />
//                   အချိန် (၁၀) စက္ကန့် သာရပါမယ်။ ပြန်ကြည့် ခွင့် မရှိပါ။
//                 </>
//               ) : (
//                 <>ပြန်ကြည့် ခွင့် မရှိပါ။</>
//               )}
//             </p>
//           </div>
//         </div>
//
//         {/* BOTTOM */}
//         <div className="w-full max-w-175 lg:max-w-150 mx-auto">
//           {currentPlayer + 1 < roles.length ? (
//             <div className="flex flex-col items-center gap-2 mt-4">
//               {(confirmed || timeLeft <= 0) && (
//                 <p className="text-sm text-gray-300">
//                   နောက်တစ်ယောက် - {nextPlayer.name}
//                 </p>
//               )}
//
//               <div className="w-full">
//                 {revealed && !confirmed ? (
//                   <Button onClick={handleConfirm}>ရပြီ</Button>
//                 ) : (
//                   <Button
//                     disabled={!confirmed}
//                     onClick={() => setShowNextCountdown(true)}
//                   >
//                     နောက် တစ်ယောက်
//                   </Button>
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div className="w-full mt-4">
//               {revealed && !confirmed ? (
//                 <Button onClick={handleConfirm}>ရပြီ</Button>
//               ) : (
//                 <Button disabled={!confirmed}>ဂိမ်း စ ဆော့ မယ်</Button>
//               )}
//             </div>
//           )}
//         </div>
//
//         {/* EXIT MODAL */}
//         {showExitModal && (
//           <div className="lg:px-80 fixed inset-0 bg-black/60 flex items-end">
//             <div className="bg-gray-900 w-full p-4 rounded-t-2xl">
//               <p className="text-center mb-2">ထွက်မှာသေချာပြီလား</p>
//               <p className="text-center text-sm mb-4">
//                 အခုထွက်လိုက်ရင် ကစားလက်စပွဲစဉ် ပျက်သွားပါလိမ့်မယ်
//               </p>
//
//               <div className="flex flex-col gap-2">
//                 <Button className="flex-1 py-2 rounded-full">ထွက်မယ်</Button>
//                 <Button
//                   onClick={() => setShowExitModal(false)}
//                   className="flex-1 bg-gray-700 py-2 rounded-full"
//                 >
//                   ဆက်ကစားမယ်
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//
//         {/* NEXT COUNTDOWN */}
//         {showNextCountdown && (
//           <NextPlayerCountdown
//             nextPlayer={nextPlayer}
//             onDone={handleNextPlayerCountdownDone}
//           />
//         )}
//       </div>
//     </div>
//   );
// }
