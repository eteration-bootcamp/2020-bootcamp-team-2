import React, { useState, useEffect } from 'react';
import { getCountries } from '../../api/apiCalls';
import Dropdown from 'react-bootstrap/Dropdown'

const CountryList = ({ onSelectCountryId }) => {
    const [countryPage, setCountryPage] = useState({ content: []})
    useEffect(() => {

        loadCountries();
    }, []);

    const loadCountries = async (page) => {
        try {
            const response = await getCountries(page);
            setCountryPage({
                content: [...response.data.content],
            })
        }
        catch (error) { }
    }
    const { content } = countryPage;

    return (
        <div>
            {content.map(country => {
                return <Dropdown.Item onClick={() => onSelectCountryId(country.id, country.countryName)}> {country.countryName} </Dropdown.Item>
            })}
        </div>
    );
};

export default CountryList;