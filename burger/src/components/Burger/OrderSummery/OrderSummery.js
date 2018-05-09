import React from "react";

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';

const orderSummery = props => {
  const ingredientsSummery = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>
        :{props.ingredients[igKey]} 1
      </li>
    );
  });

  return (
    <Aux>
      <h3> a </h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
          {ingredientsSummery}
      </ul>
      <p>Continue to Checkout ? </p>
      
      <Button>Cancel</Button>
      <Button>Continue</Button>
    </Aux>
  );
};

export default orderSummery;
