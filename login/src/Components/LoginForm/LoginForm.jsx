import React, { useState } from 'react'
import './LoginForm'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";


const LoginForm = () => {

    const [action, setAction] = useState('');

    const registerLink = () =>{
        setAction(' active');
    }

    const loginLink = () =>{
        setAction('');
    }

  return (
    <div className={`wrapper${action}`}>
        <div className='form-box login'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                        <input 
                            type="text"
                            placeholder='Username'
                            required 
                        />
                        <FaUser className='icon' />
                </div>
                <div className='input-box'>
                        <input 
                            type="password"
                            placeholder='Password'
                            required 
                        />
                        <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                        <label>
                        <input type="checkbox" />Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                </div>
                <button type='submit' onClick={loginLink}>Login</button>
                <div className="register-link">
                    <p>Don't have an account?<a href='#' onClick={registerLink}> Register</a></p>
                </div>
            </form>
        </div>
        <div className='form-box register'>
            <form action="">
                <h1>Registration</h1>
                <div className='input-box'>
                        <input 
                            type="text"
                            placeholder='Username'
                            required 
                        />
                        <FaUser className='icon' />
                </div>
                <div className='input-box'>
                        <input 
                            type="email"
                            placeholder='E-mail'
                            required 
                        />
                        <MdMail  className='icon' />
                </div>
                <div className='input-box'>
                        <input 
                            type="password"
                            placeholder='Password'
                            required 
                        />
                        <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                        <label>
                        <input type="checkbox" />I agree to the terms & conditions
                        </label>
                </div>
                <button type='submit'>Register</button>
                <div className="register-link">
                    <p>Already have an account?<a href='#' onClick={loginLink}> Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm