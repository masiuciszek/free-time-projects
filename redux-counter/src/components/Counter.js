import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/index';

class Counter extends Component {
  handleClick = e => {
    const { dispatch } = this.props;
    if (e.target.id === 'dec') {
      dispatch(decrement());
    } else {
      dispatch(increment());
    }
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h2>redux counter</h2>
        <span>{count}</span>
        <button id="dec" onClick={this.handleClick}>
          DEC
        </button>
        <button id="inc" onClick={this.handleClick}>
          {' '}
          INC
        </button>
      </div>
    );
  }
}
// global state
const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
