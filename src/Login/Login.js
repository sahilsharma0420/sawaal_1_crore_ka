import React from 'react'
import "./Login.css"
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
import {useNavigate } from "react-router-dom";
function Login() {
  const history =useNavigate();
  const Registration=()=>{
    history("/Registration");
  }
  const CssTextField=styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  })
  return (
    <div className='login'>
    <div className='login-left'>
   
      <div className='login-heading'>
        <h2 className='login-heading-part1'>Login  to your account</h2>
        <p className='login-heading-part2'>Access exclusive features by logging back into your account</p>
      </div>
      <div className='login-form'>
      <div className='loginform-part'>
        <CssTextField className="login-formfields" type="text" label=<p className="loginemail">E-mail</p> sx={{ input: { color: 'white' , height:"32px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="login-formfields" type="password" label=<p className="password">Password</p> sx={{ input: { color: 'white' , height:"32px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
  
      </div>
      <div className='login-line'/>
      <div className='login-button'>
        <Button><p className='button3'>Next</p></Button>
        <p className='account-link' onClick={Registration}>Create Account</p>
      </div>
    </div>
    <div className='login-right'></div>
    </div>
  )
}

export default Login