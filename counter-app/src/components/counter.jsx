import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 0
  }

  // Sometime we need to break the rules but only do it when you know what you are doing.
  style = {
    fontSize: 20,
  }

  render() {
    return (
      <div>
        <span style={ this.style } className="badge badge-primary m-2"> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
