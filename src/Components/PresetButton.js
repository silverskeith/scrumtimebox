import React from "react";

export default class PresetBtn extends React.Component {
  render() {
    return (
      <button className="preset" onClick={this.props.onClickHandler}>
        {this.props.label}
      </button>
    );
  }
}