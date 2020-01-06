import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';

class Cart extends Component {

  render() {
    return (
      <div>
        
        {this.props.selected.map(itm => <CartItem item={itm} />)  }
        <Total selected={this.props.selected}   />

      </div>
    )
  }
}

export default Cart;
/*
const summary = Object.keys(this.state.selected).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const selectedOption = this.state.selected[feature];

  return (
    <div className="summary__option" key={featureHash}>
      Map...<CartItem />
    </div>
  );
});
*/