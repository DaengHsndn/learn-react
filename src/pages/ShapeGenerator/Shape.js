import React, { Component } from 'react'
import './shape.css'

class PR extends Component {
  constructor() {
    super()
    this.state = {
      shape: '',
      color: '',
      amount: '',
      width: '',
      height: '',
      open: false
    };
  }

  onShapeChange = e => {
    this.setState({shape: e.target.value})
  }

  onColorChange = e => {
    this.setState({color: e.target.value})
  }

  generateButton = () => {
    var isShowing = this.state.open
    this.setState({ open: !isShowing })
  }

  render() {

    const ShapeMaker = this.state.shape;
    let result = [];

    if (ShapeMaker === "square") {
      for (let i = 0; i < this.state.amount; i++) {
        result.push(<div className="square" style={{
          backgroundColor: this.state.color,
          width: this.state.width + 'px',
          height: this.state.height + 'px',
        }} />)
      }
    }
    else {
      for (let i = 0; i < this.state.amount; i++) {
        result.push(<div className="circle" style={{
          backgroundColor: this.state.color,
          width: this.state.width + 'px',
          height: this.state.height + 'px',
        }} />)
      }
    }



    return (
      <div className="shape-container">
        <select className="shape" value={this.state.shape} onChange={this.onShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <select className="color" value={this.state.color} onChange={this.onColorChange}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
        </select>
        <div className="size">Size
        <input
            type="number"
            min="0"
            value={this.state.width}
            onChange={e => { this.setState({ width: e.target.value }) }} />
          x
            <input
            type="number"
            min="0"
            value={this.state.height}
            onChange={e => { this.setState({ height: e.target.value }) }} />
        </div>
        <div className="amount">Amount
            <input
            type="number"
            min="0"
            value={this.state.amount}
            onChange={e => { this.setState({ amount: e.target.value }) }} />
        </div>
        <button className="submit-button" 
        disabled={this.state.shape === '' || this.state.color === '' || this.state.amount === '' || this.state.width === '' || this.state.height === ''} 
        onClick={this.generateButton}>Generate !</button>
        RESULT
        <div>
          {this.state.open ? result : null}
          {this.state.open = false}
        </div>
      </div>
    )
  }
}


export default PR