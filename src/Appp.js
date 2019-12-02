import React, { Component } from "react";

class App extends Component {
  state = {
    name: "ayu",
    age: 30
  };

  // event object is takes by default, we doesnt need to pass
  handleCLick = event => {
    // console.log(event.target);
    console.log(this.state);
  };

  handleMouseOver = event => {
    console.log(event.target);
  };

  handleCopy = event => {
    console.log("try being original once!");
  };
  render() {
    return (
      <div className="App-content">
        <h1>React template</h1>
        <p>
          <strong>My name is : {this.state.name}</strong>
        </p>
        <button onClick={this.handleCLick}>ClickMe</button>
        <button onMouseOver={this.handleMouseOver}>HoverMe</button>
        <p onCopy={this.handleCopy}>What we think, we became</p>
      </div>
    );
  }
}

export default Appp;
