import * as React from 'react'
import { useLogin } from '../utils/app-requests'

const AuthContext = React.createContext();

function AuthProvider(props) {
    const [user, setUser] = React.useState(
        JSON.parse(window.localStorage.getItem('user')) || null
    )

    const logout = () => {
        console.log('logout authprovider')
        setUser(null)
        window.localStorage.clear()
    } 

    const values = { user, setUser, logout };

    return (
        <AuthContext.Provider value={ values } {...props}/>
    )
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth }