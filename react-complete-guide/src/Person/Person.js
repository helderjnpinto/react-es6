import React, { Component } from 'react';
// class Person extends Component {
// }

const person = (props) => {
    return <p>
        {/* I'm a Person with {Math.floor(Math.random() * 30)} years old! */}
        I'm a {props.name} with {props.age} years old!

        {props.children}
    </p>
}

export default person;