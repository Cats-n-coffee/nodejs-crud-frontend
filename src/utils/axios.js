import axios from 'axios'

axios.defaults.baseURL = process.env.BACKEND_URL;

axios.interceptors.request.use(config => {
    config.headers = {  
        "Accept": "*/*",
        "Content-Type": "application/json"
    }
    console.log(config)
    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use(res => {
    return res;
}, err => {
    return Promise.reject(err)
})

export default axios;