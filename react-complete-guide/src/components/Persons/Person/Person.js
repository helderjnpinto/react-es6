import React, { Component } from "react";

import classes from "./Person.css";

const person = props => {
  // const rand = Math.random();
  // if (rand > 0.7) {
  //   throw new Error("Something went wrong");
  // } for testing error boundary

  return (
      <div className={classes.person}>
        {/* I'm a Person with {Math.floor(Math.random() * 30)} years old! */}
        <p onClick={props.click}>
          I'm a {props.name} with {props.age} years old!
        </p>

        <p>{props.children}</p>
        <input onChange={props.changed} />
      </div>
  );
};

export default person;