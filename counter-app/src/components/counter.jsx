import React, { Component } from 'react';

class Counter extends Component {
 
  // constructor(){
  //   // Remember to show the error if constructor is called without super
  //   // console.log(this)
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  state = { 
    count: 0,
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    )
  }

  // handleIncrement() {
  //   console.log('state-> ', this.state.count)
  // }

  handleIncrement = () => {
    console.log('state-> ', this.state.count)
  }

  formatCount = () => {
    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}
 
export default Counter;
