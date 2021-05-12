import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

export default function Unauthenticated() {
    return (
        <div className="container">
            <h2>unauth</h2>
            <Router>
                <Switch>
                    <Route path="/signup" component={SignupScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="*" component={ () => <Redirect to="/login" /> } />
                </Switch>
            </Router>
        </div>
    )
}