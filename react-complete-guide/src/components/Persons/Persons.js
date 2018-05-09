import React, { Component } from "react";
import Person from "./Person/Person";
// import ErrorBoundary from "./ErrorBoundery/ErrorBoundary"; only for test do not use every where
class Persons extends Component {
  componentDidMount() {
    console.log(" Persons compent Did mount");
  }

  componentWillMount() {
    console.log(" Persons compent will mount");
  }

  componentWillReceiveProps(nextprops) {
    console.log(" Persons ++++++++++ Update", nextprops);
  }

  // shouldComponentUpdate(nextprops, nextstate) {
  //   console.log(" Persons ++++++++++ shouldComponentUpdate", nextprops, nextstate);
  //   return false;
  // }


  render() {
    console.log(" Persons render");

    return this.props.persons.map((person, index) => {
      return (
        // <ErrorBoundary key={person.id}> only visible in prod mode
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          // two binding
          // click={() => this.handleClick("Max!!")} //  more inefficient
          // click={this.handleClick.bind(this, "Max!!")} //  more efficient
          click={() => {
            this.props.clicked(index);
          }}
          changed={event => {
            this.props.changed(event, person.id);
          }}
        />
        // </ErrorBoundary>
      );
    });
  }
}

export default Persons;
