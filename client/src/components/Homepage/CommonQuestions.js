import React, { useState } from "react";
import "../general/general.css";
import "./BodyStyles.css";

function CommonQuestions() {
  const [showQuestion1, setshowQuestion1] = useState(false);
  const [showQuestion2, setshowQuestion2] = useState(false);
    return (
      <div className="CommonQuestions" id="CommonQuestions">
        <div className="CommonQuestions-div">
          <button
            className="CommonQuestions-button"
            onClick={() => {setshowQuestion1(!showQuestion1)}}
          >
           Common Questions
            <span className="material-symbols-outlined">add</span>
          </button>
          {showQuestion1 && (
            <p className="p-CommonQuestions">
              p Common Questions
            </p>
          )}
        </div>
        <div className="CommonQuestions-div">
          <button
            className="CommonQuestions-button"
            onClick={() => {setshowQuestion2(!showQuestion2)}}
          >
            Common Questions
            <span className="material-symbols-outlined">add</span>
          </button>
          {showQuestion2 && (
            <p className="p-CommonQuestions">
              p Common Questions
            </p>
          )}
        </div>
      </div>
    );
  
}

export default CommonQuestions;
