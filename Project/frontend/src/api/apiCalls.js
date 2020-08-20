import axios from 'axios'

export const register = (body) => {
    return axios.post('/api/1.0/users', body);
}

export const blog = (body) => {
    return axios.post('/api/1.0/blogs', body);
};
export const changeLanguage = language => {
    axios.defaults.headers['accept-language'] = language;
};

export const getBlogs = (page = 0) => {
    return axios.get('/api/1.0/blogs?page=' + page);
};

export const getCountries = (page = 0) => {
    return axios.get('/api/1.0/countries?page=' + page);
};

export const getCities = (countryId) => {
    return axios.get('/api/1.0/cities/' + countryId);
};

export const getCafes = (cityId='') => {
    return axios.get('/api/1.0/cafes/' + cityId); 
};

export const getHotels = (cityId='') => {
    return axios.get('/api/1.0/hotels/' + cityId);
};

export const getHistoricals = (cityId='') => {
    return axios.get('/api/1.0/historicals/' + cityId);
};

export const getEats = (cityId='') => {
    return axios.get('/api/1.0/eats/' + cityId);
};

export const getBars = (cityId='') => {
    return axios.get('/api/1.0/bars/' + cityId);
};

export const getActivities = (cityId='') => {
    return axios.get('/api/1.0/activities/' + cityId);
}; 