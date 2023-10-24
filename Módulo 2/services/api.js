import axios from 'axios';

const instance = axios.create({
    baseURL:'https://hn.algolia.com/api/v1/search?query=',
});

export default instance;    
