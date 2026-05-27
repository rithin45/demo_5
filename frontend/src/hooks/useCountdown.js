import { useEffect, useMemo, useState } from "react";

function getTimeRemaining(targetDate) {
  const distance = new Date(targetDate).getTime() - new Date().getTime();

  if (distance <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      isComplete: true,
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    isComplete: false,
  };
}

export default function useCountdown(targetDate) {
  const initialState = useMemo(() => getTimeRemaining(targetDate), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(initialState);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
