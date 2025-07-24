import React from "react";
import { useNavigate } from "react-router-dom";

function HomeContainer() {
    const navigate = useNavigate();
    return (
        <div className="section-container home-container container">
            <div className="content">
                <h1 className="home--title">Build a self care routine suitable for you</h1>
                <p className="home--description">This is the main content area.</p>
                <button onClick={() => navigate("/question/1")} className="home--button">Start the quiz</button>
            </div>
        </div>
    );
}

export default HomeContainer;
