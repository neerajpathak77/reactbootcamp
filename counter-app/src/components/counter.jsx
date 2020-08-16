import React, { Component } from 'react';

class Counter extends Component {
 
  render() {
    const { 
      counter, onDelete, onIncrement, onDecrement, children 
    }  = this.props;

    return (
      <div className="row">
        <div className="col-1">
          {children}
          <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        </div>
        <div className="col">
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button 
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onDecrement(counter)}
            disabled={counter.value===0}
          >
            -
          </button>
          <button 
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
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
