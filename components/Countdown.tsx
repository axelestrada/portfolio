import { FC, useEffect, useState } from "react";
import styles from "./styles/Countdown.module.sass";

export default function Countdown() {
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
      const targetDate = new Date("2022/04/30 17:20:00");

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
    <div className={styles["countdown"]}>
      <Marker timeLeft={countdown.days} label="Días" />
      <Marker timeLeft={countdown.hours} label="Horas" />
      <Marker timeLeft={countdown.minutes} label="Minutos" />
      <Marker timeLeft={countdown.seconds} label="Segundos" />
    </div>
  );
}

const Marker: FC<{ timeLeft: string; label: string }> = ({
  timeLeft,
  label,
}) => (
  <div className={styles["countdown__marker"]}>
    <span className={styles["countdown__time-left"]}>{timeLeft}</span>
    <span className={styles["countdown__label"]}>{label}</span>
  </div>
);
