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

  // Here we have a big issue we do not have a single source  of truth. Here the Reset button 
  // successfully  updates the state but still the DOM doesn't gets updated because the counter component
  // has it's own local state so it is not reflected. this kind of scenarios are MUST to take care
  // Show react debugger where state is correct but child had it's own state copied from prop
  // state = {  value: this.props.value }

  handleReset = () => {
    this.setState(prevState => ({
      counters: prevState.counters.map(counter => ({...counter, value: 0 }))
    }))
  }

  handleDelete = (id) => {
    this.setState(prevState => ({
      counters: prevState.counters.filter(counter => id !== counter.id)
    }))
  }

  renderCounter = () => {
    const { counters } =  this.state;
    return counters.map(counter => (
      <Counter 
        key={counter.id}
        {...counter}
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
