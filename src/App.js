import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinjas from "./AddNinjas";

export default class App extends Component {
  state = {
    ninjas: [
      {
        name: "pratik",
        age: 27,
        belt: "black",
        id: 1
      },
      { name: "Ram", age: 27, belt: "green", id: 2 },
      { name: "sanket", age: 27, belt: "green", id: 3 }
    ]
  };

  addNinja = ninja => {
    console.log("ninja", ninja);
    ninja.id = Math.random();
    console.log("ninjaAfterIDAdded", ninja);
    let ninjas = [...this.state.ninjas, ninja];
    console.log("newNinja", ninjas);
    this.setState({
      ninjas: ninjas
    });
  };

  deleteNinja = id => {
    console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id != id;
    });

    this.setState({
      ninjas: ninjas
    });
  };

  render() {
    return (
      <div>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinjas addNinja={this.addNinja} />
      </div>
    );
  }
}
