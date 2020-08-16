import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

  // Explain how why React debugger tools
  // How to use
  // Why to use
  // $r 
  // $r.render() // or any method can be executed from console
 
  state = { 
    counters: [
      {id: 1, value: 2 },
      {id: 2, value: 0 },
      {id: 3, value: 5 },
      {id: 4, value: 1 }
    ],
  }

  renderCounter = () => {
    const { counters } =  this.state;
    return counters.map(counter => (
      <Counter 
        key={counter.id}
        value={counter.value}
      >
        <h6> Counter # {counter.id} </h6>
      </Counter>
    ))
  }

  render() {
    return (
      <>
        {this.renderCounter()}
      </>
    )
  }
}
 
export default Counters;
