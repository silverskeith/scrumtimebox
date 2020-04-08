import React from "react";

export default class Input extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.form = React.createRef();
    const strSeconds = (parseInt(Math.floor(this.refs.minutes.value * 60)) + parseInt(this.refs.seconds.value > 0 ? this.refs.seconds.value : 0));
    
    this.refs.seconds.value = "";
    this.refs.minutes.value = "";
    if(strSeconds > 0) {
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <form ref={this.form} onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="input-field col s6">
            <input type="number" id="mins" min="0" ref="minutes" />
            <label htmlFor="mins">Minutes</label>
          </div>
          <div className="input-field col s6">
            <input
              min="0"
              type="number"
              id="secs"
              ref="seconds"
            />
            <label htmlFor="secs">Seconds</label>
          </div>
        </div>
        <button className='waves-effect waves-light' type="submit">Start</button>
      </form>
    );
  }
}
