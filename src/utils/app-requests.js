import axios from './axios'

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
    })
}

function signupUser(data) {
    return axios.post('/signup', data)
    .then(res => {
        console.log(res)
        storeUserInLocalStorage('id', res.data._id)
        storeUserInLocalStorage('email', res.data.email)
    })
}

function postInvoice(data) {
    return axios.post('/postinvoice', data)
    .then(res => console.log(res))
}

export { getData, loginUser, signupUser, postInvoice }