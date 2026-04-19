import { changeToMMNumber } from '@/lib/change-to-mm-number';
import { animate } from 'animejs';
import { useEffect, useRef } from 'react';

interface CircularTimerProps {
  totalTime: number;
  timeLeft: number;
  strokeColor?: string;
  trackColor?: string;
  isPaused?: boolean;
  formatTime?: boolean;
}

const CircularTimer = ({
  totalTime = 5,
  timeLeft,
  strokeColor = "#FA0000",
  trackColor = "#374151",
  isPaused = false,
  formatTime = true
}: CircularTimerProps) => {

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;



  const trackRef = useRef<SVGCircleElement>(null);
  const headRef = useRef<SVGCircleElement>(null);

  const trackAnimRef = useRef<any>(null);
  const headAnimRef = useRef<any>(null);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;


  useEffect(() => {

    if (trackRef.current && headRef.current) {
      trackAnimRef.current = animate(trackRef.current, {
        strokeDashoffset: [0, -circumference],
        duration: totalTime * 1000,
        easing: 'linear',
        autoplay: false
      });

      headAnimRef.current = animate(headRef.current, {
        rotate: [0, 360],
        duration: totalTime * 1000,
        easing: 'linear',
        autoplay: false
      });

      const elapsedTime = (totalTime - timeLeft) * 1000;
      if (elapsedTime > 0) {
        trackAnimRef.current.seek(elapsedTime);
        headAnimRef.current.seek(elapsedTime);
      }

    }

    return () => {

      if (trackAnimRef.current?.pause) trackAnimRef.current.pause();
      if (headAnimRef.current?.pause) headAnimRef.current.pause();
    };

  }, [totalTime, circumference]);

  useEffect(() => {
    if (timeLeft === totalTime) {
      trackAnimRef.current?.pause();
      headAnimRef.current?.pause();
      trackAnimRef.current?.seek(0);
      headAnimRef.current?.seek(0);

      if (!isPaused) {
        trackAnimRef.current?.play();
        headAnimRef.current?.play();
      }
      return;

    }
    if (isPaused) {
      trackAnimRef.current?.pause();
      headAnimRef.current?.pause();

      const elapsedTime = (totalTime - timeLeft) * 1000;
      trackAnimRef.current.seek(elapsedTime);
      headAnimRef.current.seek(elapsedTime);

    } else if (timeLeft > 0) {
      trackAnimRef.current?.play();
      headAnimRef.current?.play();
    }
  }, [isPaused, timeLeft, totalTime]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-48 h-48">

        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <defs>
            <filter id={`glow-${strokeColor.replace('#', '')}`} x="-50%" y="-50%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="50" cy="50" r={radius} fill="transparent" stroke={trackColor} strokeWidth="3" />

          <circle
            ref={trackRef}
            cx="50" cy="50" r={radius} fill="transparent" stroke={strokeColor}
            strokeWidth="3" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={0}
          />

          <circle
            ref={headRef}
            cx="95" cy="50" r="4" fill="#ffffff"
            filter={`url(#glow-${strokeColor.replace('#', '')})`}
            style={{ transformOrigin: '50px 50px' }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">
            {changeToMMNumber(formatTime ? formattedTime : timeLeft.toString())}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularTimer;