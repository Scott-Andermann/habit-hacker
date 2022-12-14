import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = ({ saveToken }) => {
    // scottandermann@gmail.com / 123123
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('this is a test');
        // need to hash the username and password before sending to protect users
        // const token = await loginUser({
        //     username: username, password: sha256(password)
        // })
        // saveToken(token)
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className='header-container'>
                    <h1>Log in</h1>
                </div>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='input-label'>
                        <input className='input-field' type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Your Email' />
                    </div>
                    <div className='input-label'>
                        <input className='input-field' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    </div>

                    <div className='submit-wrapper'>
                        <button className='submit-button' type='submit'>Log In</button>
                    </div>
                </form>
                <div className="alt-actions">
                    <Link className='login-link' to='/create-account'>Create new account</Link>
                    <Link className='login-link' >Forgot password?</Link>

                </div>
            </div>
        </div>
    );
}

export default Login;
