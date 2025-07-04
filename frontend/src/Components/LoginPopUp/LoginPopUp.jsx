import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

  const[currState,setCurrState]= useState('Login')
  return (
    <div className='login-popup'>
         <form className='login-popup-container'>
          <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className='login-popup-input'>
            {currState==='Login'?<></>:<input type='text' placeholder='Your name' required/>}
            <input type='email' placeholder='Your Email' required/>
            <input type='password' placeholder='Password' required/>
          </div>
          <button>{currState==='Sign Up'?'Create account':'Login'}</button>
          <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By Continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {currState==='Login'
          ?<p>Create a new account <span onClick={()=>setCurrState('Sign Up')}>Click Here</span></p>
          :<p>Already have an Account? <span onClick={()=>setCurrState('Login')}>Login Here</span></p>
        }
          
         
         </form>
    </div>
  )
}

export default LoginPopUp
