import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Hey, click me 😔",
    };
  }

  handleClick = () => {
    this.setState({
      buttonText: "🎉🎉 You clicked me ! 🎉🎉",
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default ClassState;
