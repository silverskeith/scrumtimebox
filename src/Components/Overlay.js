import React from "react";

export default class Overlay extends React.Component {
    render() {
    return (
      <div id="overlay" onClick={this.props.onClickHandler}>
        <div id="text" className="time-up">Time's UP!</div>
      </div>
    );
  }
}
