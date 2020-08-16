import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
  renderCounter = () => {
    const { counters, handleDelete, onIncrement, onDecrement } =  this.props;
    return counters.map(counter => (
      <Counter 
        counter={counter}
        key={counter.id}
        onDelete={handleDelete}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      >
        <h6> Counter # {counter.id} </h6>
      </Counter>
    ))
  }

  render() {
    const { handleReset } =  this.props;

    return (
      <>
        <button 
          className="btn btn-danger btn-sm m-2"
          onClick={handleReset}
        >
          Reset
        </button>
        {this.renderCounter()}
      </>
    )
  }
}
 
export default Counters;
