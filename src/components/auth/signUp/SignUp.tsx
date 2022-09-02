// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Auth.scss'

const SignUp:React.FC = () => {
  return (
      <>
        <h1>Hello</h1>
        <p>Sign in to NFT-Store  or <NavLink to='#'>create an account</NavLink></p>
        <form className="wrapper-form">
        <label>Email</label>
        <input type="text"  maxLength={64}/>
        <label>Password</label>
        <input type="password"  maxLength={64} />
        <button type='submit'>Continue</button>
        </form>
      </>
  )
}

export default SignUp