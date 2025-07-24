import React from "react";
import ResultContainer from "../../containers/result/result.container"
import ResultProductContainer from "../../containers/result/result-product.container";

function ResultPage() {
  return (
    <div className="section-page result-page">
      <ResultContainer />
      <ResultProductContainer />  

      {/* <div className="hero"></div> */}
      <br /><br /><br /><br />

    </div>
  );
}

export default ResultPage;
