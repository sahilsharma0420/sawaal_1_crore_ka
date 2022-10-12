import React,{useState} from 'react'
import "./Registration.css"
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import { Button } from "@mui/material";
import {FormControlLabel,Checkbox,MenuItem} from "@mui/material"
import {useNavigate } from "react-router-dom";
function Registration() {
  const history =useNavigate();
const login=()=>{
  history("/Login");
}
  const [input,setinput]=useState('');
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
  const handleChange=(event)=>{
    setinput(event.target.value)
  };
  return (
    <div className='registration'>
    <div className='registration-left'>

      <div className='registration-heading'>
        <h2 className='registration-heading-part1'>Create account</h2>
        <p className='registration-heading-part2'>By registering, you are giving us approval to contact you for promotional and transactional activity</p>
      </div>
      <div className='registration-form'>
      <div className='registrationform-part1'>
        <CssTextField className="registration-formfields" type="text" label=<p className="name">Name</p> sx={{ input: { color: 'white' , height:"32px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="registration-formfields" type="text" label=<p className="email">E-mail </p>sx={{ input: { color: 'white', height:"32px"  } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='registrationform-part2'>
      <CssTextField className="registration-formfields" type="text" label=<p className="mobile">Mobile</p> sx={{ input: { color: 'white', height:"32px"  } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/> 
      <CssTextField className="registration-formfields" select type="text" label=<p className="gender">Select Gender</p> value={input} sx={{ input: { color: 'white'  } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='medium' onChange={handleChange} > 
       
       <MenuItem  value="male"><p className="menuitem">Male</p></MenuItem>
       <MenuItem  value="female"><p className="menuitem">Female</p></MenuItem>
       <MenuItem  value="other"><p className="menuitem">Others</p></MenuItem>
       </CssTextField>
      </div>
      </div>
      <div className='registration-line'/>
    <div className="lower-section">
      <div className='registration-checkbox'>
      <FormControlLabel label="I have read and accept the Terms and Conditions" control={<Checkbox style ={{color: "rgb(255, 214, 1)",}}/>}/>
      <FormControlLabel label="Subscribe to the newsletter to stay up to date" control={<Checkbox style ={{color: "rgb(255, 214, 1)",}}/>}/>
      </div>
      <div className='registration-button'>
        <Button  style={{ padding:"0px" }}><p className='button1'>Next</p></Button>
        <p className='button2' onClick={login}>Already have an account?</p>
      </div>
      </div>
    </div>
    <div className='registration-right'></div>
    </div>
  )
}

export default Registration

