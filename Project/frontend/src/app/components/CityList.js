import React, { useState, useEffect } from 'react';
import { getCities } from '../../api/apiCalls';
import CityView from './CityView';

const CityList = (props)=> {
    const [cityPage, setCityPage] = useState({ content: [] })
    

    useEffect(() => {

        loadCities(props.countryId);
    }, [props.countryId]);
    
    const loadCities = async (countryId) => {
        try {         
            const response = await getCities(countryId);
            setCityPage({
                content: [ ...response.data]
            })
            
        } catch (error) {console.log("hataaa"+error) }
    }

    const { content } = cityPage;



    return (
        <div>
            {content.map(city => {
                return <CityView key={city.id} city={city} />               
            })}
        </div>
    );
};

export default CityList;