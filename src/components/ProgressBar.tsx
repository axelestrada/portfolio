import { FC } from "react";

const ProgressBar: FC<{ title: string; progress: number }> = ({
  title,
  progress,
}) => {
  return (
    <div className="progressbar">
      <div className="progress" style={{ width: `${progress}%` }}>
        <span>{title}</span>

        <span>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
