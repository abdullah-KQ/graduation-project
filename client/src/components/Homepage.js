import React, { Component } from "react";
import axios from "axios";

class Homepage extends Component {
  state = { details: [], };

  componentDidMount() {
    let data;
    axios.get("http://127.0.0.1:8000/register/")
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        {this.state.details.map((output, id) => (
          <div key={id}>
          <h1>{output.Fullname}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default Homepage;
