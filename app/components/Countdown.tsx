import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  date: string;
  onFinish?: () => void;
}

export function Countdown({ date, onFinish }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(date) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  const isFinished =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  useEffect(() => {
    // Tick every second until the countdown reaches zero
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = calculateTimeLeft();

        const done =
          next.days === 0 &&
          next.hours === 0 &&
          next.minutes === 0 &&
          next.seconds === 0;

        if (done && !(prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0)) {
          // Call onFinish only once when we first reach zero
          onFinish?.();
        }

        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [date, onFinish]);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
        <div className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.25)] text-xs sm:text-sm tracking-[0.2em] uppercase text-accent-200">
          Today is the day
        </div>
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-serif drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
          Priyanka &amp; Aniket say "I do"
        </div>
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
          Thank you for being here to celebrate this moment with us. Your
          love, blessings, and presence mean the world.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 w-16 sm:w-20 md:w-24 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {formatTime(value)}
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-white/70 mt-1">
              {unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
