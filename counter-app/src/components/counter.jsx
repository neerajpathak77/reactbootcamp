import React, { Component } from 'react';

class Counter extends Component {
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
  // Remember to start with normal method then this will break and change the method to arrow function
  handleIncrement() {
    console.log('state-> ', this.state.count) // error
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
