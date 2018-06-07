import React, { Component } from "react";

import classes from "./Person.css";

class Person extends Component {
  // const rand = Math.random();
  // if (rand > 0.7) {
  //   throw new Error("Something went wrong");
  // } for testing error boundary
  componentDidMount() {
    console.log(" Person* compent Did mount");
  }

  componentWillMount() {
    console.log(" Person* compent will mount");
  }

  render() {
    console.log(" Person* render");
    return (
      <div className={classes.person}>
        {/* I'm a Person with {Math.floor(Math.random() * 30)} years old! */}
        <p onClick={this.props.click}>
          I'm a {this.props.name} with {this.props.age} years old!
        </p>

        <p>{this.props.children}</p>
        <input onChange={this.props.changed} />
      </div>
    );
  }
}
export default Person;
