import React,{useState} from 'react'
import "./Registration.css"
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
import {FormControlLabel,Checkbox,MenuItem} from "@mui/material"

function Registration() {
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
    <img className='registration-image' src='https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg' alt='not  found'/>
      <div className='registration-heading'>
        <h2 className='registration-heading-part1'>Create account</h2>
        <p className='registration-heading-part2'>By registering, you are giving us approval to contact you for promotional and transactional activity</p>
      </div>
      <div className='registration-form'>
      <div className='registrationform-part1'>
        <CssTextField className="registration-formfields" type="text" label="Name" sx={{ input: { color: 'white' } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="registration-formfields" type="text" label="E-mail" sx={{ input: { color: 'white' } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='registrationform-part2'>
      <CssTextField className="registration-formfields" type="text" label="Mobile" sx={{ input: { color: 'white' } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/> 
      <CssTextField className="registration-formfields" select type="text" label="Select Gender" value={input} sx={{ input: { color: 'white' } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' onChange={handleChange} > 
       
       <MenuItem value="male"><p className="menuitem">Male</p></MenuItem>
       <MenuItem value="female"><p className="menuitem">Female</p></MenuItem>
       <MenuItem value="other"><p className="menuitem">Others</p></MenuItem>
       </CssTextField>
      </div>
      </div>
      <div className='registration-line'/>
      <div className='registration-checkbox'>
      <FormControlLabel label="I have read and accept the Terms and Conditions" control={<Checkbox style ={{color: "rgb(255, 214, 1)",}}/>}/>
      <FormControlLabel label="Subscribe to the newsletter to stay up to date" control={<Checkbox style ={{color: "rgb(255, 214, 1)",}}/>}/>
      </div>
      <div className='registration-button'>
        <Button><p className='button1'>Next</p></Button>
        <Button><p className='button2'>Already have an account?</p></Button>
      </div>
    </div>
    <div className='registration-right'></div>
    </div>
  )
}

export default Registration

