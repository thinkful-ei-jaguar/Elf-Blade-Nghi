import React, { Component } from 'react';

const CustomItem = (props) => {
  return;
}

export default CustomItem;

/*
  const features = Object.keys(this.props.features).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
  const options = this.props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    // All costs are in USD
    const USCurrency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
      });
    return (
      <div key={itemHash} className="feature__item">
        <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.state.selected[feature].name}
          onChange={e => this.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrency.format(item.cost)})
        </label>
      </div>
    );
  });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <CustomItem />
      </fieldset>
    );
  });
*/