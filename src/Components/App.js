import React from "react";
import PresetBtn from "./PresetButton";
import Clock from "./Clock";
import Button from "./Button";
import Input from "./Input";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.refs[this.state.count].refs.seconds.value = this.state.count;

    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStart();
          break;
        default:
      }
    }
  }

  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
    }, 1000);
  }

  handleStop() {
    this.refs[this.state.count].refs.seconds.value = this.state.count;
    if (this.timer) {
      clearInterval(this.timer);
      this.setState({ running: false });
    }
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  handleCountdown(seconds) {
    this.setState({ count: seconds, running: true });
  }

  handlePreset(seconds) {
    this.refs[this.state.count].refs.seconds.value = seconds;
    this.setState({ count: seconds, running: true });
  }

  render() {
    const { count } = this.state;
    return (
      <div className="container">
        <Clock time={count} />
        <PresetBtn
          label="15 mins"
          onClickHandler={this.handlePreset.bind(this, 900)}
        />
        <PresetBtn
          label="10 mins"
          onClickHandler={this.handlePreset.bind(this, 600)}
        />
        <PresetBtn
          label="5 mins"
          onClickHandler={this.handlePreset.bind(this, 300)}
        />
        <Input
          ref={this.state.count}
          onSetCountdown={this.handleCountdown.bind(this)}
        />
        <Button label="Stop" onClickHandler={this.handleStop.bind(this)} />
        <Button label="Reset" onClickHandler={this.handleReset.bind(this)} />
      </div>
    );
  }
}
