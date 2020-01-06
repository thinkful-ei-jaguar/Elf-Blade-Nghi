import React, { Component } from 'react';


const CartItem = (props) => {
  // Creates unique key
  const featureHash = props.partName + '-' + props.id;
  // All costs are in USD
  const USCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{props.partName} </div>
      <div className="summary__option__value">{props.itemName}</div>
      <div className="summary__option__cost">
        {USCurrency.format(props.itemCost)}
      </div>
    </div>
  );
}

export default CartItem;