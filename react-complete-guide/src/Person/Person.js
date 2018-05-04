import React, { Component } from "react";

import "./Person.css";

const person = props => {
  return (
    <div className="person" onClick={props.click}>
      {/* I'm a Person with {Math.floor(Math.random() * 30)} years old! */}
      <p>
        I'm a {props.name} with {props.age} years old!
      </p>

      <p>{props.children}</p>
      <input onChange={props.changed} />
    </div>
  );
};

export default person;
