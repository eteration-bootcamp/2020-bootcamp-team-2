import React, { useState, useEffect } from 'react';
import { getCities } from '../../api/apiCalls';
import CityView from './CityView';

const CityList = (props)=> {
    const [cityPage, setCityPage] = useState({ content: [] })
    

    useEffect(() => {
        // props.countryId bilgisi geçipşehirleri çağıracaksınız.
        loadCities(props.countryId);
    }, []);
    
    const loadCities = async (countryId) => {
        try {
            console.log("SElammmmm " + countryId);
            const response = await getCities(countryId);
            console.log("REsonpınsese"+response.data[0].cityName);
            setCityPage(previousCityPage => ({
                ...response.data,
                content: [...previousCityPage.content, ...response.data]
            }))
            
        } catch (error) {console.log("hataaa"+error) }
    }

    const { content } = cityPage;



    return (
        <div>
            {content.map(city => {
                {console.log("HEYYY"+city.cityName)}
                return <CityView key={city.id} city={city} />
                
            })}

        </div>
    );
};

export default CityList;