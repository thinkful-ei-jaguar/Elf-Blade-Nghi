import React, { Component, useCallback } from 'react';

const CustomItem = (props) => {
  
  let idKey = props.itemIndex + '-' + props.partName;
  const USCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (

    <div key={idKey} className="feature__item">
      <input
        type="radio"
        id={idKey}
        className="feature__option"

        name={props.partName}
        checked={props.nameCheckCallback(props.partName, props.featureName)} 
        
        onChange={e => props.updateCallback(props.featureName, e.target.value)}
      />

      <label htmlFor={idKey} className="feature__label">
        {props.partName} ({USCurrency.format(props.partCost)})
      </label>
    </div>
    
  );
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