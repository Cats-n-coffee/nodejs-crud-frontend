import React from 'react'
import PortalScreen from './screens/PortalScreen'
import { useAuth } from './context/auth-context'
import ThemeToggler from './components/otherElements/ThemeToggler'

export default function Authenticated() {
    const { user, logout } = useAuth();
    return (
        <div className="auth">
            <header>
                <div>
                    <span>Logged in as: </span>
                    <span>{ user.email }</span>
                </div>
                <ThemeToggler />
                <button onClick={ () => logout() }>logout</button>
            </header>
            <PortalScreen />   
        </div>
        
    )
}