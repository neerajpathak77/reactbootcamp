import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 0
  }

  render() {

    return (
      <div>
        <span> {this.formatCount()}</span>
        <button>Increment</button>
      </div>
    )
  }

  formatCount = () => {
    const { count } = this.state;

    // Remember We can even return JSX like <span> Zero </span>
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;
