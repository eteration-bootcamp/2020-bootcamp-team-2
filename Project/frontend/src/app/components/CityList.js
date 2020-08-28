import React, { useState, useEffect } from 'react';
import { getCities } from '../../api/apiCalls';
import Dropdown from 'react-bootstrap/Dropdown'

const CityList = (props) => {
    const [cityPage, setCityPage] = useState({ content: [] })

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
            {content.map(city => {
                return <Dropdown.Item onClick={() => props.setCity(city.id, city.cityName)}> {city.cityName}</Dropdown.Item>
               })}
        </div>
    )
};

export default CityList;