import React from 'react'
import AuthForm from '../components/forms/AuthForm'
import { Link } from 'react-router-dom'

export default function SignupScreen(props) {
    return (
        <section>
            <AuthForm type="signup"/>
            {/* <Link to="./screen/LoginScreen.js">Login</Link> */}
        </section>
    )
}