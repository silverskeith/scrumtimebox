import React from "react";

export default class Input extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    // console.log('onSubmit', this.secondRef.current.value);
    const strSeconds = this.refs.seconds.value;
    // const strSeconds = this.secondRef.current.value;

    if (strSeconds.match(/[0-9]/)) {
      this.refs.seconds.value = "";
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="seconds" placeholder="Enter time in seconds" />
        <input type="submit" value="Start"></input>
      </form>
    );
  }
}
