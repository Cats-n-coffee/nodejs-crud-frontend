import * as React from 'react'
import { loginUser, signupUser } from '../utils/app-requests'

const AuthContext = React.createContext();

function AuthProvider(props) {
    const [user, setUser] = React.useState(
        window.localStorage.getItem('id') || null
    )

    const login = (data) => {
        console.log('login authprovider')
        loginUser(data)
        setUser(data)
    }

    const signup = (data) => {
        console.log('signup authprovider')
        signupUser(data)
        setUser(data)
    }

    const logout = () => {
        console.log('logout authprovider')
        setUser(null)
        window.localStorage.clear()
    } 

    const values = { user, login, signup, logout };

    return (
        <AuthContext.Provider value={ values } {...props}/>
    )
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }