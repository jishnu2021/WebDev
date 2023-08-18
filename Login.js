import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';

const Login = () => {

  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    console.log('User Email:', email);
    console.log('Password:', password);
  };

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/')
    }
   })

  const handleLogin=async()=>{
    console.warn("email,password:",email,password)
    let result = await fetch('http://localhost:5000/login',{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
          }
    });
    result=await result.json()
    console.warn(result)
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user))
        localStorage.setItem("token",JSON.stringify(result.auth))
        navigate('/')
    }else{
        alert('please enter correct details')
    }
  }
  return (
    <>
      <h2 className='text'>Login Form</h2>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="User Email Id"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
