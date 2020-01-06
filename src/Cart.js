import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';

class Cart extends Component {
  render() {
    return (
  
      <section className="main__summary">
        <h2>Your cart</h2>

        {Object.keys(this.props.selected).map((itm, index) => 
        <CartItem 
        key={index}
        id={index}
        partName={itm} 
        itemName={this.props.selected[itm].name}
        itemCost={this.props.selected[itm].cost}
        />)}
        <Total selected={this.props.selected} />
      </section>
      
    )
  }
}

export default Cart;