import React, { Component } from 'react';

const Total = (props) => {
  const totalCost = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
  
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value"> 
        {totalCost}
      </div>
    </div>
  )
}

/*Previous:  {USCurrencyFormat.format(total)} */

export default Total;