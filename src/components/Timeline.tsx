import { FC, ReactNode } from "react";

const Timeline: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="timeline">{children}</div>;
};

export const TimelineItem: FC<{
  title: string;
  startDate: string;
  finishDate: string;
  description: string;
}> = ({ title, startDate, finishDate, description }) => {
  return (
    <div className="item">
      <div className="header">
        <h5 className="title">{title}</h5>

        <span className="date">{`${startDate} — ${finishDate}`}</span>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default Timeline;
