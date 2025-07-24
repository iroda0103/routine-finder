import { useNavigate } from "react-router-dom";

const ResultContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="section-container result-container">
      <section className="content">
        <h2 className="home--title">Build your everyday self care routine.</h2>
        <p className="home--description">
          Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.
        </p>
        <button className="retake-btn" onClick={() => navigate(`/question/1`)}>
          Retake the quiz
        </button>
      </section>
      <div className="hero"></div>
    </div>
  );
};

export default ResultContainer;
