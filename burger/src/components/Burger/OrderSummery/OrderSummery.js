import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";

import Button from "../../UI/Button/Button";

class OrderSummery extends Component {
  // this could be a functional component 
  // componentWillUpdate() {
  //   console.log('[OrderSummery] componentWillUpdate');
  // }


  render() {
    const ingredientsSummery = Object.keys(this.props.ingredients).map(
      (igKey, i) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>
            :{this.props.ingredients[igKey]} 1
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3> a </h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummery}</ul>
        <p>Continue to Checkout ? </p>

        <Button>Cancel</Button>
        <Button>Continue</Button>
      </Aux>
    );
  }
}

export default OrderSummery;
