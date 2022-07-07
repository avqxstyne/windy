import React from 'react'
import { useState } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div id='login-page'>
      <Navbar />
      
      
      <div id='login-page-main-island'>

        <div id='login-page-main-island-content1'>
          <h1>Welcome to Windfall</h1>
          <p>Level up your life</p>
          <form id='login-page-main-island-form'>
            <input 
              type="text" 
              required 
              placeholder='Username'
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            ></input>
            <input 
              type="password" 
              required 
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            ></input>
            <button type='submit'>Sign Up</button>
          </form>
        </div>

        <div id='login-page-main-island-content2'>
          <h1>Glad to see you</h1>
          <p>
            This app was created for men and 
            women on, or joining, self improvement. 
            You can use it to manage your tasks 
             and keep yourself accountable.
          </p>
          <p>
            I encourage you to use it responsibly 
            and honestly, so that you will see the 
            maximum improvement within yourself. 
          </p>
          <p>
            Enjoy.
          </p>
        </div>

      </div>
    </div>
  
  )
}

export default LoginPage;