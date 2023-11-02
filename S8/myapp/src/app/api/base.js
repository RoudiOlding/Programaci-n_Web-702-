import axios from 'axios'

const URI = 'http://localhost:3001'

const get = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.get(url);
    } catch(err){
        console.error(err);
        return null;
    }
}

const post = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.get(url, payload);
    } catch(err){
        console.error(err);
        return null;
    }
}

const put = async (endpoint, payload) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.get(url, payload);
    } catch(err){
        console.error(err);
        return null;
    }
}

const remmove = async (endpoint) => {
    try {
        const url = URI.concat(endpoint);

        return await axios.get(url);
    } catch(err){
        console.error(err);
        return null;
    }
}

const base = { get };

export default base;