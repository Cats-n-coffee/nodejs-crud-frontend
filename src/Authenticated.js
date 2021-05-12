import React from 'react'
import PortalScreen from './screens/PortalScreen'
import { useAuth } from './context/auth-context'
import ThemeToggler from './components/otherElements/ThemeToggler'
import { HeaderStyled, Button } from './styles/styles'

export default function Authenticated() {
    const { user, logout } = useAuth();
    return (
        <div className="container">
            <HeaderStyled>
                <div className="user-email">
                    <span>Logged in as: </span>
                    <span>{ user.email }</span>
                </div>
                <div className="header-buttons">
                    <ThemeToggler />
                    <Button onClick={ () => logout() }>logout</Button>
                </div>
            </HeaderStyled>
            <PortalScreen />   
        </div>
        
    )
}