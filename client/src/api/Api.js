import axios from 'axios'

const api = axios.create({
    baseURL: 'http://locahhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})
