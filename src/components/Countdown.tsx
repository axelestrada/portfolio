import { FC, useEffect, useState } from "react";

const Countdown: FC<{}> = ({}) => {
  const [countdown, setCountdown] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const pad: (n: number) => string = (n) => (n < 10 ? "0" : "") + n;

  useEffect(() => {
    const getCountdown = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date(
        "Sun Dec 31 2023 18:00:00 GMT-0600 (Central Standard Time)"
      );

      let secondsLeft = (targetDate.valueOf() - currentDate.valueOf()) / 1000;

      const days = pad(Math.floor(secondsLeft / 86400));
      secondsLeft %= 86400;

      const hours = pad(Math.floor(secondsLeft / 3600));
      secondsLeft %= 3600;

      const minutes = pad(Math.floor(secondsLeft / 60));
      const seconds = pad(Math.floor(secondsLeft % 60));

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(getCountdown);
  }, []);

  return (
    <div className="countdown">
      <Marker timeLeft={countdown.days} label="Días" />
      <Marker timeLeft={countdown.hours} label="Horas" />
      <Marker timeLeft={countdown.minutes} label="Minutos" />
      <Marker timeLeft={countdown.seconds} label="Segundos" />
    </div>
  );
};

const Marker: FC<{ timeLeft: string; label: string }> = ({
  timeLeft,
  label,
}) => (
  <div className="marker">
    <span className="time-left">{timeLeft}</span>
    <span className="label">{label}</span>
  </div>
);

export default Countdown;
