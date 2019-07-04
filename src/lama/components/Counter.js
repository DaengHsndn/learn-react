import React, { Component, Fragment } from 'react'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  minusNumber = () => {
    this.setState({
      number: this.state.number - 1
    })
  };

  plusNumber = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <Fragment>
        <h2>Counter App</h2>
        <div>
          <button className="btn btn-outline-danger" onClick={this.minusNumber}>-</button>
          <b>{this.state.number}</b>
          <button className="btn btn-outline-danger" onClick={this.plusNumber}>+</button>
        </div>
      </Fragment>
    )
  }
}
export default Counter