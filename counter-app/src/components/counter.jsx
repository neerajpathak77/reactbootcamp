import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 0,
    tags: ['tag-1', 'tag-2', 'tag-3']
  }

  render() {
    const classes = this.getBadgeClasses();

    return (
      <div>
        <span className={classes}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
      </div>
    )
  }

  renderTags = () => {
    const { tags } = this.state;
    return tags.length ? 
    (<ul>
      {tags.map(tag =>  <li key={tag}>{tag}</li>)} 
    </ul>)
    :
    <p>Please create a tag first</p>
  }

  formatCount = () => {
    const { count } = this.state;

    return count === 0 ? 'Zero' : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }
}
 
export default Counter;
