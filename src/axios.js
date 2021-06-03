import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinderbackend24.herokuapp.com/'
})

export default instance;