import React, { Component } from 'react';

class Counter extends Component {
 
  state = { 
    value: this.props.value,
  }

  render() {
    return (
      <div>
        {this.props.children}
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
    // Remember to show what happens if we try to change props value
    // this.props.value = 0;
    this.setState({ value: this.state.value + 1 })
  }

  formatCount = () => {
    const { value } = this.state;

    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}
 
export default Counter;
