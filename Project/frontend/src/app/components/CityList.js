import React, { useState, useEffect } from 'react';
import { getCities } from '../../api/apiCalls';
import CityView from './CityView';

const CityList = () => {
    const [cityPage, setCityPage] = useState({ content: [], last: true, number: 0 })

    useEffect(() => {

        loadCities();
    }, []);

    const loadCities = async (page) => {
        try {
            const response = await getCities(page);
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