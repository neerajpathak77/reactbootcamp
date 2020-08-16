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
  // Rule of thumb a component owns a piece of state should be the one modifying it
  handleDelete = (id) => {
    // const counters = this.state.counters.filter(counter => id !== counter.id)
    // this.setState({ counters })
    this.setState(prevState => ({
      counters: prevState.counters.filter(counter => id !== counter.id)
    }))
  }

  renderCounter = () => {
    const { counters } =  this.state;
    return counters.map(counter => (
      <Counter 
        key={counter.id}
        onDelete={this.handleDelete}
        // value={counter.value}
        // id={counter.id}
        {...counter}
        // or like counter={counter}
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
