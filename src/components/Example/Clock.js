import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log(this.timerID);
  }

  componentWillUnmount() {
    console.log("componentWillUnmounta");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log("render")

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;