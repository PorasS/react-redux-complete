import React, { Component } from "react";

export default class AddNinjas extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handleChange = event => {
    console.log("handleChange", event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit", this.state);
    this.props.addNinja(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange}></input>
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handleChange}></input>
          <label htmlFor="name">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
