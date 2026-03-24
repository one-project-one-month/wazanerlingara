import { useEffect, useRef, useState } from "react";

interface Player {
  name: string;
  avatar?: string;
}

interface NextPlayerCountdownProps {
  nextPlayer: Player;
  onDone: () => void;
}

export default function NextPlayerCountdown({
  nextPlayer,
  onDone,
}: NextPlayerCountdownProps) {
  const [countdown, setCountdown] = useState(3);
  const [progress, setProgress] = useState(0);
  const [radius, setRadius] = useState(90); // responsive radius

  const requestRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const duration = 3000;

  // ✅ Responsive radius (mobile / tablet / desktop)
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setRadius(140); // desktop
      } else if (window.innerWidth >= 768) {
        setRadius(110); // tablet
      } else {
        setRadius(90); // mobile
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ✅ Animate progress (smooth)
  useEffect(() => {
    const animateFrame = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (elapsed < duration) {
        requestRef.current = requestAnimationFrame(animateFrame);
      } else {
        onDone();
      }
    };

    requestRef.current = requestAnimationFrame(animateFrame);

    return () => {
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
    };
  }, [onDone]);

  // ✅ Countdown numbers
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((c) => (c <= 1 ? 0 : c - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Dynamic stroke based on size
  const stroke = radius >= 140 ? 10 : radius >= 110 ? 8 : 6;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // ✅ Dot position
  const angle = (progress / 100) * 360;
  const angleInRadians = (angle * Math.PI) / 180;

  const dotX = radius + normalizedRadius * Math.sin(angleInRadians);
  const dotY = radius - normalizedRadius * Math.cos(angleInRadians);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50">
      {/* TEXT */}
      <p className="mb-10 text-center text-sm md:text-lg lg:text-xl text-white/80">
        ဖုန်းကို {nextPlayer.name} ဆီ ကမ်းပေးပါ။
      </p>

      {/* CIRCLE */}
      <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2}>
          {/* Background */}
          <circle
            stroke="#2a2a2a"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Progress */}
          <circle
            stroke="#ef4444"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </svg>

        {/* DOT */}
        <div
          className="absolute w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]"
          style={{
            left: `${dotX - 8}px`,
            top: `${dotY - 8}px`,
          }}
        />

        {/* COUNTDOWN */}
        <div className="absolute text-3xl md:text-5xl lg:text-6xl font-bold text-red-400">
          {countdown > 0 ? countdown : ""}
        </div>
      </div>
    </div>
  );
}
