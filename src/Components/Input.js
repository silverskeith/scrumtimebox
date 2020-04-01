import React from "react";

export default class Input extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.form = React.createRef();
    const strSeconds = (parseInt(Math.floor(this.refs.minutes.value * 60)) + parseInt(this.refs.seconds.value > 0 ? this.refs.seconds.value : 0));
    
    this.refs.seconds.value = "";
    this.refs.minutes.value = "";
    this.props.onSetCountdown(parseInt(strSeconds, 10));
  }

  render() {
    return (
      <form ref={this.form} onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="input-field col s6">
            <input type="text" id="mins" ref="minutes" />
            <label htmlFor="mins">Minutes</label>
          </div>
          <div className="input-field col s6">
            <input
              type="text"
              id="secs"
              ref="seconds"
            />
            <label htmlFor="secs">Seconds</label>
          </div>
        </div>
        <input type="submit" value="Start"></input>
      </form>
    );
  }
}
