import { FC } from "react";
import styles from "./styles/ProgressBar.module.sass";

const ProgressBar: FC<{ title: string; progress: number }> = ({
  title,
  progress,
}) => {
  return (
    <div className={styles["progressbar"]}>
      <div className={styles["progressbar__progress"]} style={{ width: `${progress}%` }}>
        <span>{title}</span>

        <span>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
