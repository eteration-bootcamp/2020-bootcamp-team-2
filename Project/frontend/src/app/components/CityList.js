import React, { useState, useEffect } from 'react';
import { getCities } from '../../api/apiCalls';
import Dropdown from 'react-bootstrap/Dropdown'


<<<<<<< HEAD
const CityList = (props) => {
    const [cityPage, setCityPage] = useState({ content: [] , last: true, number: 0  })


=======
const CityList = (props, onSelectCityId) => {
    const [cityPage, setCityPage] = useState({ content: [] })
>>>>>>> 54854b2db903c137a152e0213f1e58fc78a4e321
    useEffect(() => {
        loadCities(props.countryId);
    }, [props.countryId]);
    
    const loadCities = async (countryId) => {
        try {
            const response = await getCities(countryId);
            setCityPage({
                content: [...response.data]
            })
        } catch (error) { }
    }
    const { content } = cityPage;

    return (
        <div>
<<<<<<< HEAD
            {content.map(city => {               
                return <Dropdown.Item onClick={ () => props.setCity(city.id,city.cityName)}> {city.cityName}</Dropdown.Item>
                //<CityView key={city.id} city={city} />               
=======
            {content.map(city => {
                return <Dropdown.Item onClick={() => onSelectCityId(city.id)}> {city.cityName}</Dropdown.Item>
>>>>>>> 54854b2db903c137a152e0213f1e58fc78a4e321
            })}
        </div>
    )
};

export default CityList;