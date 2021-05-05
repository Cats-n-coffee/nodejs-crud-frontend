import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context'

export default function AuthForm(props) {
    const { login, signup } = useAuth();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault()
        if (props.type === "signup") {
            signup({ username, email, password })
        }
        else {
            login({ email, password })
        }
    }

    return (
        <section>
            <form onSubmit={ handleSubmit }>
            { props.type === "signup" ? 
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                    id="username" 
                    type="text" 
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                : null } 
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    id="email" 
                    type="text" 
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    id="password" 
                    type="password" 
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            { props.type === "signup" ? 
            <Link to="/login">Already a member? Login</Link>
            : <Link to="/signup">Not a member yet? Signup</Link> }
        </section>
        
    )
}

