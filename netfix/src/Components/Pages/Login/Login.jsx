import React, { useState } from 'react';
import './Login.css';
import Logo from '../../../assets/logo.png'
import {signup, login} from '../../../firebase'

const Login = () => {
    const [signState,setSignState]=useState("Sign In")
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const user_auth=async (event)=>{
      event.preventDefault();
      if(signState==="Sign In"){
        await login(email,password);
      }
      else
        await signup(name,email,password);
    }

  return (
    <div className="login">
        <img src={Logo} alt="" className='login-logo'/>
        <div className="login-form">
            <h2>{signState}</h2>
        <form>
            {signState==="Sign Up"?<input value={name} onChange={(e)=>{setName(e.target.value)}} htype="text" placeholder='Your Name'/>:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password'/>
          <button onClick={user_auth} type="submit" className="login-btn">{signState}</button>
          <div className='form-help'>
            <div className='remember '>
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-swith">
            {signState==="Sign In"?<p>New to Netflix? 
            <span onClick={()=>{setSignState("Sign Up")}}>Sgin Up Now</span></p>
            :<p>Alredy have a account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
        </div>
        </div>
    </div>
  );
};

export default Login;
