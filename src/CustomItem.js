import React from 'react';

const CustomItem = (props) => {
  
  let idKey = props.itemIndex + '-' + props.partName;
  const USCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const obj = {
    name: props.partName,
    cost: props.partCost
  }

  return (

    <div key={idKey} className="feature__item">
      <input
        type="radio"
        id={idKey}
        className="feature__option"

        name={props.partName}
        checked={props.nameCheckCallback(props.partName, props.featureName)} 
        
        onChange={e => props.updateCallback(props.featureName, obj)}
      />

      <label htmlFor={idKey} className="feature__label">
        {props.partName} ({USCurrency.format(props.partCost)})
      </label>
    </div>
    
  );
}

export default CustomItem;