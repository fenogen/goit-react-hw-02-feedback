// import './App.css';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
  // total: 0,           //-----> Нужно вынести total
  // positivePerсent: 0,
}
  
   fnPlus = (ev) => {

    if (ev.target.id === "plus") {
      this.setState((prevState) =>
        ({ good: prevState.good + 1 }))
    }
     
    if (ev.target.id === "neutral") {
      this.setState({ neutral: this.state.neutral + 1 })
    }
    if (ev.target.id === "bad") {
      this.setState({ bad: this.state.bad + 1 })
    }
     
    //  this.fnTotal();                                                                   //----->  не сработает, будет с задержкой
  }

   fnTotal = () => {
     const result = this.state.good + this.state.neutral + this.state.bad;
    // this.setState({ total: this.state.good + this.state.neutral + this.state.bad})     //----->  не сработает
    return result;
   }
  
   fnPositivePerсent = () => {
    const sum = this.fnTotal();
    console.log(sum)
    const result = sum ? (this.state.good * 100 / sum) : 0;

    console.log(result)
    // this.setState({ positivePerсent: this.state.good * 100 / this.state.total })
    return result.toFixed(0);
  }

  render() {
    return (
      <div className="">
        <h1>Please leave feedback</h1>
        <div>
          <button id="plus" onClick={this.fnPlus}>Good</button>
          <button id="neutral" onClick={this.fnPlus}>Neutral</button>
          <button id="bad" onClick={this.fnPlus}>Bad</button>
        </div>
        <ul> Statistics
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.fnTotal()}</li>                                               {/*//----->  запустили ф-ю при отрисовке*/}
          <li>Positive feedback: {this.fnPositivePerсent()} %</li>                       {/*//----->  запустили ф-ю при отрисовке*/}
          </ul>
      </div>
    )
  }
}

