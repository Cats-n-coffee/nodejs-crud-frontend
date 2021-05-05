import React from 'react'
import PortalScreen from './screens/PortalScreen'
import { getData } from './utils/app-requests'
import { useAuth } from './context/auth-context'

export default function Authenticated() {
    const { logout } = useAuth();
    return (
        <div>
            <h2>auth</h2>
            <PortalScreen />
            <button onClick={ () => getData() }>click</button>
            <button onClick={ () => logout() }>logout</button>
        </div>
        
    )
}