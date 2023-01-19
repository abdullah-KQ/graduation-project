import React, { Component } from "react";
import "../general/general.css";
import "./BodyStyles.css";

class CommonQuestions extends Component {
  constructor() {
    super();
    this.state = {
      showQ: false,
      showQ2: false,
    };
    this.showQuestion = this.showQuestion.bind(this);
    this.showQuestion2 = this.showQuestion2.bind(this);
  }

  showQuestion() {
    this.setState((prevState) => ({
      showQ: !prevState.showQ,
    }));
  }
  showQuestion2() {
    this.setState((prevState) => ({
      showQ2: !prevState.showQ2,
    }));
  }

  render() {
    return (
      <div className="CommonQuestions" id="CommonQuestions">
        <div className="CommonQuestions-div">
          <button
            className="CommonQuestions-button"
            onClick={this.showQuestion}
          >
           Common Questions
            <span className="material-symbols-outlined">add</span>
          </button>
          {this.state.showQ && (
            <p className="p-CommonQuestions">
              p Common Questions
            </p>
          )}
        </div>
        <div className="CommonQuestions-div">
          <button
            className="CommonQuestions-button"
            onClick={this.showQuestion2}
          >
            Common Questions
            <span className="material-symbols-outlined">add</span>
          </button>
          {this.state.showQ2 && (
            <p className="p-CommonQuestions">
              p Common Questions
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default CommonQuestions;
