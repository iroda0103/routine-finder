import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import QuestionProgress from "../../components/question/questionProgress";
import AnswerButton from '../../utilits/answerButton';
import { quizData } from "../../repository/quizData";

function QuestionContainer() {
    const navigate = useNavigate();
    const { id } = useParams();
    const questionId = Number(id);

    const def_data = quizData.reduce((acc, item) => {
        acc[item.id] = "";
        return acc;
    }, {});

    const [answers, setAnswers] = useState(def_data);

    function handleAnswerClick(value) {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));

    }

    function nextQuestion() {
        if (!answers[questionId]) {
            alert("Please select an answer before proceeding.");
            return;
        }

        if (questionId < 5) {
            navigate(`/question/${questionId + 1}`);
        } else {
            localStorage.setItem("userAnswers", JSON.stringify(answers));
            navigate("/result");
        }
    }

    return (
        <div className="question-container container">
            <div className="content">
                <h1 className="question--title">{quizData[questionId - 1].title}</h1>
                <QuestionProgress current={questionId} total={5} />
            </div>

            <div className="answers">
                {quizData[questionId - 1].questions.map((item, index) => (
                    <AnswerButton
                        key={index}
                        label={item.label}
                        onClick={() => handleAnswerClick(item.value)}
                        active={item.value === answers[questionId]}
                    />
                ))}
            </div>

            <div className="navigate-wrapper">
                <span className="back--button" onClick={() => navigate(-1)}>Back</span>
                <button
                    className="next--button"
                    onClick={nextQuestion}
                >
                    Next question <ArrowRightOutlined />
                </button>
            </div>
        </div>
    );
}

export default QuestionContainer;
