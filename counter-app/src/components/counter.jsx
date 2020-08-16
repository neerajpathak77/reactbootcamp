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
          onClick={() => this.handleIncrement({ id: 2 })}
        >
          Increment
        </button>
      </div>
    )
  }

  handleIncrement = (product) => {
    console.log(product)
  }

  // start with worst code to pass a parameters 
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 })
  // }

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
