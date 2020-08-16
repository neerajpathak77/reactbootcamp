import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
 
  state = { 
    counters: [
      {id: 1, initialvalue: 0 },
      {id: 2, initialvalue: 0 },
      {id: 3, initialvalue: 0 },
      {id: 4, initialvalue: 0 }
    ],
  }

  renderCounter = () => {
    const { counters } =  this.state;
    return counters.map(counter => <Counter key={counter.id}/>)
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
