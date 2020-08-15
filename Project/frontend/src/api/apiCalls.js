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