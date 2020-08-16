import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 33
  }

  render() {
    const classes = this.getBadgeClasses();

    return (
      <div>
        <span className={classes}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    )
  }

  formatCount = () => {
    const { count } = this.state;

    // Remember We can even return JSX like <span> Zero </span>
    return count === 0 ? 'Zero' : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}
 
export default Counter;
