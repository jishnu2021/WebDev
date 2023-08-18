import React, { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const SignUp = () => {
const [name,setName]=useState("")
const [password,setPassword]=useState("");
const [email,setEmail]=useState("")
const navigate =useNavigate();

const NameData=(e)=>{
    setName(e.target.value)
}

 useEffect(()=>{
  const auth = localStorage.getItem("user");
  if(auth){
    navigate('/')
  }
 })
const CollectData=async()=>{
    console.log(name,email,password);
    const result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
    const res = await result.json()
    console.warn(res)
    localStorage.setItem("user",JSON.stringify(res.result))
    localStorage.setItem("token",JSON.stringify(res.auth))
   navigate('/')
  
    
}

  return (
    <div className='register'>
      <h1>Resgister</h1>
      
      <input className="inputbox" type="text" placeholder='Enter Name' value={name} onChange={NameData}/>
      <input className="inputbox" type="email" placeholder='Enter Email Id' 
      value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className="inputbox" type="password" placeholder='Enter Password' 
      value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      <button className='appButton' onClick={CollectData}>Sign Up</button>
    </div>
  )
}

export default SignUp
