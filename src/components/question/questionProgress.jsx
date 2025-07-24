import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const QuestionProgress = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div style={{ width: 101, height: 101 }} className="question__position">
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          pathColor: "#AADDF3",
          trailColor: "#EEF7FB",
        })}
      >
        <div style={{ fontSize: "20px", color: "#1C2635" }}>
          {current}/{total}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default QuestionProgress;
