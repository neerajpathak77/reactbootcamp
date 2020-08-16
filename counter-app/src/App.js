import React from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

// Mounting phase
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()
// Note: The componentWillMount() method is considered legacy and you should avoid them in new code:
// UNSAFE_componentWillMount()
// ****** Remember in react strictMode (https://reactjs.org/docs/strict-mode.html)
// constructor is run twice so remember this to explain and to switch off before showing
// Mounting is recursive it means all the children are also rendered

class App extends React.Component {

  constructor(props){
    super(props)
    console.log('App - constructor')
  }

  componentDidMount(){
    // Right place to make a fetch call and get data
    console.log('App - componentDidMount')
  }

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
    console.log('App - render')
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
