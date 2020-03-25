import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClickHandler}>{this.props.label}</button>
        )
    }
}