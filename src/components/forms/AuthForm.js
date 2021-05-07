import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context'
import { loginUser, signupUser } from '../../utils/app-requests'

export default function AuthForm(props) {
    const { setUser } = useAuth();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        if (props.type === "signup") {
            signupUser({ username, email, password })
            .then(res => {
                if (res.errMsg) {
                    throw new Error(res.errMsg)
                }
                else {
                    setUser(res.data)
                }
            })
            .catch(err => { 
                console.log('catch err in component', err.message)
                setError(err.message)
            })
        }  
        else {
            loginUser({ email, password })
            .then(res => {
                if (res.errMsg) {
                    throw new Error(res.errMsg)
                }
                else {
                    setUser(res.data)
                }
            })
            .catch(err => {
                console.log('catch err in component', err.message)
                setError(err.message)
            })
        }
        setUsername('')
        setEmail('')
        setPassword('')
    }
    
    React.useEffect(() => {
        setTimeout(() => {
            setError('')
        }, 3000);
        return () => clearTimeout()
    }, [error])

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
                    value={username}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    id="password" 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                { error ? <div>{ error }</div> : null}
                <button type="submit">Submit</button>
            </form>
            { props.type === "signup" ? 
            <Link to="/login">Already a member? Login</Link>
            : <Link to="/signup">Not a member yet? Signup</Link> }
        </section>
        
    )
}

