import React from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

// Now to share the state between the elements which do not have a parent child relation 
// We have to lift the state. 
// In next steps we will add context API to handle the data
// 

class App extends React.Component {
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

  render(){
    const { counters } = this.state;
    return (
      <>
        <NavBar totalCounters={counters.filter(c => c.value > 0).length} />
        <Counters
          counters={counters}
          handleIncrement={this.handleIncrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
