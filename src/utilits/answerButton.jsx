import React from "react";

function AnswerButton(props) {
  const { label, onClick, active } = props;

  return (
   <button className={`answer--button ${active ? "active" : ""}`} onClick={onClick}>
     {label}
   </button>
  );
}

export default AnswerButton;
