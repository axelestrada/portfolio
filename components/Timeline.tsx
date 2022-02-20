import { FC, ReactNode } from "react";
import styles from "./styles/Timeline.module.sass";

const Timeline: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles["timeline"]}>{children}</div>;
};

export const TimelineItem: FC<{
  title: string;
  startDate: string;
  finishDate: string;
  description: string;
}> = ({ title, startDate, finishDate, description }) => {
  return (
    <div className={styles["timeline__item"]}>
      <div className={styles["header"]}>
        <h5 className={styles["title"]}>{title}</h5>

        <span
          className={styles["date"]}
        >{`${startDate} — ${finishDate}`}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Timeline;
