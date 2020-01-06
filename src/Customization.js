import React from 'react';

import CustomItem from './CustomItem';

const Customization = (props) => {
  return (<form className="main__form">
  <h2>Customize your laptop</h2>

  {Object.keys(props.features).map((part, index) => {
    const featureHash = part + '-' + index;
    return (
      <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{part}</h3>
      </legend>

      {props.features[part].map((item, index) => 

        <CustomItem    
        key={index}
        partName={item.name}
        featureName={part}
        partCost={item.cost}
        itemIndex={index}
        updateCallback={props.updateCallback}
        nameCheckCallback={props.nameCheckCallback}
        />

      )
      }
  
    </fieldset>

    );})}

  </form>

  );
}

export default Customization;