import React from 'react';
import ReactDOM from 'react-dom';

export default class FizzBuzz extends React.Component {
  state = {
    fizzBuzz: '',
    counter: 0
  };
  isFizzBuzz = () => {
    let i = this.state.counter;
    let fb = this.state.fizzBuzz;
    
    if (i % 3 === 0) { fb += 'Fizz, ' }
    if (i % 5 === 0) { fb += 'Buzz, ' };
    if (i % 5 && i % 3) { fb += i + ', ' };
    
    this.setState({ fizzBuzz: fb });
  };
  increment = () => {
    this.setState({ counter: ++this.state.counter });
    this.isFizzBuzz();
  };
  decrement = () => {
    this.setState({ counter: --this.state.counter });
    this.isFizzBuzz();
  };
  render() {
    return (
      <div>
        <p>Click buttons to create FizzBuzz</p>
        <button type='button' onClick={this.increment}>+</button>{ }
        <button type='button' onClick={this.decrement}>-</button><br /><br />
        {this.state.fizzBuzz}
      </div>
    );
  }
}