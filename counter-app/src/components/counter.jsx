import React, { Component } from 'react';

class Counter extends Component {
  state = {  }
  render() { 
    // React.createElement('type') it needs type, so if multiple items are there babel does not know how to compile this long expression or you can which type of element this render should return. so in react we have to wrap elements to a parent
    // Remember this div to convert to fragment
    // Remember why parentheses - js places ; after return if no code
    return (
      <div>
        <h1> Welcome !!</h1>
        <button>Increment</button>
      </div>
    )
  }
}
 
export default Counter;
