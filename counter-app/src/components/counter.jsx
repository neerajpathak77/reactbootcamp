import React, { Component } from 'react';

class Counter extends Component {

  componentDidUpdate(prevProps, prevState){
    console.log('Counter - componentDidUpdate', prevProps, prevState)
    if(prevProps.counter.value !== this.props.counter.value){
      console.log('Here optimize code to take actions')
    }
  }
 
  render() {
    console.log('Counter - render')

    const { 
      counter, onDelete, onIncrement, children 
    }  = this.props;

    return (
      <div>
        {children}
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>
        <button 
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    )
  }

  formatCount = () => {
    const { value } = this.props.counter;

    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    const { value } = this.props.counter;
    let classes = "badge m-2 ";
    classes += value === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}
 
export default Counter;
