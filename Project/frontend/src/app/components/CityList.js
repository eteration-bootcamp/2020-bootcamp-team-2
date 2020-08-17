import React, { useState, useEffect } from 'react';
import { getCities } from '../../api/apiCalls';
import CityView from './CityView';

const CityList = (props)=> {
    const [cityPage, setCityPage] = useState({ content: [], last: true, number: 0 })

    useEffect(() => {
        // props.countryId bilgisi geçipşehirleri çağıracaksınız.
        loadCities(props.countryId);
    }, []);

    const loadCities = async (countryId) => {
        try {
            const response = await getCities(countryId);
            setCityPage(previousCityPage => ({
                ...response.data,
                content: [...previousCityPage.content, ...response.data.content]
            }))
        } catch (error) { }
    }

    const { content, last, number } = cityPage;



    return (
        <div>
            {content.map(city => {
                
                return <CityView key={city.id} city={city} />
                
            })}

        </div>
    );
};

export default CityList;