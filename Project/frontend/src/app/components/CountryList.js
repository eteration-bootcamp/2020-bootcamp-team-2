import React, { useState, useEffect } from 'react';
import { getCountries } from '../../api/apiCalls';
import Dropdown from 'react-bootstrap/Dropdown'

const CountryList = ({ onSelectCountryId }) => {
    const [countryPage, setCountryPage] = useState({ content: [], last: true, number: 0 })
    useEffect(() => {

        loadCountries();
    }, []);

    const loadCountries = async (page) => {
        try {
            const response = await getCountries(page);
            setCountryPage({
                content: [...response.data.content],
            })

        } catch (error) { }
    }

    const { content } = countryPage;



    return (
        <div>

            {content.map(country => {
<<<<<<< HEAD
                //return <CountryView key={country.id} country={country} />
                
                return <Dropdown.Item  onClick={ () => onSelectCountryId(country.id,country.countryName)}> {country.countryName} </Dropdown.Item>
=======
                return <Dropdown.Item onClick={() => onSelectCountryId(country.id)}> {country.countryName} </Dropdown.Item>
>>>>>>> 54854b2db903c137a152e0213f1e58fc78a4e321
            })}

        </div>
    );
};

export default CountryList;