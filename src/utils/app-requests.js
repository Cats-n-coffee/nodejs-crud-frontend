import axios from './axios'
import { useAuth } from '../context/auth-context'

function storeUserInLocalStorage(key, user) {
    return window.localStorage.setItem(key, user)
}

function getData() {
    return axios.get('/getting')
    .then(res => console.log(res))
}

function loginUser(data) {
    return axios.post('/login', data)
    .then(res => { 
        console.log(res)
        storeUserInLocalStorage('id', res.data._id)
        storeUserInLocalStorage('email', res.data.email)
        return res;
    })
    .catch(err => {
        console.log('loginUser err', err.response.data)
        return err.response.data;
    })
}

function signupUser(data) {
    return axios.post('/signup', data)
    .then(res => {
        console.log(res)
        storeUserInLocalStorage('id', res.data._id)
        storeUserInLocalStorage('email', res.data.email)
        return res;
    })
    .catch(err => {
        console.log('signupUser err', err.response.data)
        return err.response.data;
    })
}

function postInvoice(data) {
    return axios.post('/postinvoice', data)
    .then(res => console.log(res))
}

export { getData, loginUser, signupUser, postInvoice }