import React from "react";
import PresetBtn from "./PresetButton";
import Clock from "./Clock";
import Button from "./Button";
import Input from "./Input";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      seconds: 0,
      minutes: 0,
      count: 0,
      running: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStart();
          break;
        default:
      }
    }
  }

  putTimeValue(second) {
    const secondVal = (second > 60) ? second - 60 : second;
    const minuteVal = Math.floor(second / 60);

    this.setState({ minutes: minuteVal, seconds: (secondVal - 1), count: (parseInt(Math.floor(minuteVal * 60)) + parseInt(secondVal))});

    this.inputRef.current.refs.seconds.focus();
    this.inputRef.current.refs.seconds.value = secondVal - 1;
    
    this.inputRef.current.refs.minutes.focus();
    this.inputRef.current.refs.minutes.value = minuteVal;
  }

  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0, minutes: (Math.floor(newCount / 60)) });
    }, 1000);
  }

  handleStop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.putTimeValue(this.state.count);
      this.setState({ running: false });
    }
  }

  handleReset() {
    clearInterval(this.timer);
    this.setState({ count: 0 });
  }

  handleCountdown(seconds) {
    this.putTimeValue(seconds);
    this.setState({ count: seconds - 1, running: true });
  }

  handlePreset(seconds) {
    this.putTimeValue(seconds);
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
          ref={this.inputRef}
          onSetCountdown={this.handleCountdown.bind(this)}
        />
        <Button label="Stop" onClickHandler={this.handleStop.bind(this)} />
        <Button label="Reset" onClickHandler={this.handleReset.bind(this)} />
      </div>
    );
  }
}
