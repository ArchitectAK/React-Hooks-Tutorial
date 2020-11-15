import React, { Component } from "react";

class ClassUpdateTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Old Title",
    };
  }

  componentDidMount() {
    console.log(`componentDidMount: ${this.state.title}`); // Old Title
    document.title = `${this.state.title}`;
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate: ${this.state.title}`); // Updated Title
    document.title = `${this.state.title}`;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ title: "Updated Title" })}>
          Update document title
        </button>
      </div>
    );
  }
}

export default ClassUpdateTitle;
