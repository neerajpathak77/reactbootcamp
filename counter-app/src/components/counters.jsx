import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
  state = { 
    counters: [
      {id: 1, value: 2 },
      {id: 2, value: 0 },
      {id: 3, value: 5 },
      {id: 4, value: 1 }
    ],
  }

  handleReset = () => {
    this.setState(prevState => ({
      counters: prevState.counters.map(counter => ({...counter, value: 0 }))
    }))
  }

  handleDelete = id => {
    this.setState(prevState => ({
      counters: prevState.counters.filter(counter => id !== counter.id)
    }))
  }

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const cntr = { ...counter }
    cntr.value += 1
    counters[index] = cntr;
    this.setState({ counters });
  }

  renderCounter = () => {
    const { counters } =  this.state;
    return counters.map(counter => (
      <Counter 
        counter={counter}
        key={counter.id}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
      >
        <h6> Counter # {counter.id} </h6>
      </Counter>
    ))
  }

  render() {
    return (
      <>
        <button 
          className="btn btn-danger btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.renderCounter()}
      </>
    )
  }
}
 
export default Counters;
