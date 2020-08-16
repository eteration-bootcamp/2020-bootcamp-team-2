import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

const CountryView = (props) => {
    const { country } = props;
    return (
          
        <Dropdown.Item href="#"> {country.countryName}</Dropdown.Item>
      
    )
};

export default CountryView;