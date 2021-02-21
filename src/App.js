// import './App.css';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePersent: 0,
}
  
  plus = (ev) => {

    if (ev.target.id === "plus") {
      this.setState({ good: this.state.good + 1 })
    }
    if (ev.target.id === "neutral") {
      this.setState({ neutral: this.state.neutral + 1 })
    }
    if (ev.target.id === "bad") {
      this.setState({ bad: this.state.bad + 1 })
    }
  }

  total = () => {
    
  }


  render() {
    return (
      <div className="">
        <h1>Please leave feedback</h1>
        <div>
          <button id="plus" onClick={this.plus}>Good</button>
          <button id="neutral" onClick={this.plus}>Neutral</button>
          <button id="bad" onClick={this.plus}>Bad</button>
        </div>
        <ul> Statistics
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
          <li>Positive feedback: {this.state.positivePersent} %</li>
          </ul>
      </div>
    )
  }
}

