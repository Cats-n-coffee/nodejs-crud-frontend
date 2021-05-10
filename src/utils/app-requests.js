import axios from './axios'
import { useAuth } from '../context/auth-context'

function storeUserInLocalStorage(key, user) {
    return window.localStorage.setItem(key, user)
}

function loginUser(data) {
    return axios.post('/login', data)
    .then(res => { 
        console.log(res)
        storeUserInLocalStorage('user', JSON.stringify(res.data))
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
        storeUserInLocalStorage('user', JSON.stringify(res.data))
        return res;
    })
    .catch(err => {
        console.log('signupUser err', err.response.data)
        return err.response.data;
    })
}

function addNewInvoice(data) {
    return axios.post('/newinvoice', data)
    .then(res => {
        console.log(res)
        return res;
    })
    .catch(err => {
        console.log('addNewinvoice err', err.response)
        return err.response.data;
    })
}

function findInvoice(data) {
    console.log(data)
    return axios.get('/selectinvoice', { params: { ...data } })
    .then(res => {
        console.log('response data', res.data)
        return  res.data;
    })
    .catch(err => console.log(err))
}

function deleteInvoiceFromDb(data) {
    console.log('invoice id', data)
    return axios.delete('/deleteinvoice', { data: { ...data } })
    .then(res => {
        console.log('delete data', res.data)
        return  res.data;
    })
    .catch(err => console.log(err))
}

export { findInvoice, loginUser, signupUser, addNewInvoice, deleteInvoiceFromDb }