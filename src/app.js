import * as React from 'react'
import ReactDOM from 'react-dom'
import { useAuth, AuthProvider } from './context/auth-context'
import Authenticated from './Authenticated'
import Unauthenticated from './Unauthenticated'

function App() {
    const { user } = useAuth();
    console.log(user)
    return (
        user ? <Authenticated /> : <Unauthenticated /> 
    )
}

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>
, document.getElementById("root"));