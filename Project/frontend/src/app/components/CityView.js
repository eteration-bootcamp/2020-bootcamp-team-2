import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const CityView = (props) => {
    const { city} = props;
    return (
              
        <Dropdown.Item href="#"> {city.cityName}</Dropdown.Item>
      
    )
};

export default CityView;