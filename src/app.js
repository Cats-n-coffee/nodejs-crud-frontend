import * as React from 'react'
import ReactDOM from 'react-dom'
import { useAuth } from './context/auth-context'
import Authenticated from './Authenticated'
import Unauthenticated from './Unauthenticated'
import AppProvider from './context/app-provider'

function App() {
    const { user } = useAuth();
    return (
        user ? <Authenticated /> : <Unauthenticated /> 
    )
}

ReactDOM.render(
   <AppProvider>
       <App />
   </AppProvider>       
, document.getElementById("root"));