import React from "react";
import { useNavigate } from "react-router-dom";
import QuestionContainer from "../../containers/question/question.container"

function QuestionPage() {
  return (
    <div className="question-page">
      <QuestionContainer />
    </div>
  );
}

export default QuestionPage;
