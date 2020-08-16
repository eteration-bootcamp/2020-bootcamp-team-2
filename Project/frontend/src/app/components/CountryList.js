import React, { useState, useEffect } from 'react';
import { getCountries } from '../../api/apiCalls';
import CountryView from './CountryView';

const CountryList = () => {
    const [countryPage, setCountryPage] = useState({ content: [], last: true, number: 0 })

    useEffect(() => {

        loadCountries();
    }, []);

    const loadCountries = async (page) => {
        try {
            const response = await getCountries(page);
            setCountryPage(previousCountryPage => ({
                ...response.data,
                content: [...previousCountryPage.content, ...response.data.content]
            }))
        } catch (error) { }
    }

    const { content, last, number } = countryPage;



    return (
        <div>
            {content.map(country => {
                return <CountryView key={country.id} country={country} />
            })}

        </div>
    );
};

export default CountryList;