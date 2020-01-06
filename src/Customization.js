import React, { Component } from 'react';
import slugify from 'slugify';

import CustomItem from './CustomItem';

const Customization = (props) => {
  return (<form className="main__form">
  <h2>Customize your laptop</h2>
  {Object.keys(props.features).map(part => 
    <CustomItem 
    partName={part}
    partItems={props.features[part]}
    />)}
</form>);
}

export default Customization;