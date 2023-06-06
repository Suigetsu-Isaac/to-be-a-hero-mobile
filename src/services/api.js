import axios from 'axios';

const local = "http://192.168.1.6:3333"

const deploy = 'https://to-be-a-hero.onrender.com/'

const api = axios.create({
    baseURL: deploy,
});

export default api;