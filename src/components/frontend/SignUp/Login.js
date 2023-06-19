import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
   
    const handleLogin = async () => {
        console.log(12354)
        let data = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json', 
                
            },
        });
        data = await data.json();
        console.log(data)
        if (data.message == 'Logged in!') {
            localStorage.setItem('token', data.token);
            if (data.role==='1' ){
             navigate('/admin/dashboard')   
            } else{
                navigate('/')
            }
            
        } else {
            alert('Please enter connect details')
        }
    }
    return (

        <div className='login'>
            <h1>Login</h1>
            <input className="inputBox" type='text' placeholder='Entre Email'
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input className="inputBox" type='password' placeholder='Entre Password'
                onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className='appButton' type='button'>Login</button>
        </div>
    )
}

export default Login
