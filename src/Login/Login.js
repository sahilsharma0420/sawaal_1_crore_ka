import React from 'react'
import "./Login.css"
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
function Login() {
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
   <div className='login-image-container'>
    <img className='login-image' src='https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg' alt='not  found'/>
      </div>
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
      </div>
    </div>
    <div className='login-right'></div>
    </div>
  )
}

export default Login