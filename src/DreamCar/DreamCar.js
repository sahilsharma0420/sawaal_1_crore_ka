import React from 'react'
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
import "./DreamCar.css"
function DreamCar() {
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
    <div className="dreamcar">
        <div className="dreamcar-left">
        <div className='dreamcar-image-container'>
      <img  className='dreamcar-image' src='https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg' alt='not  found'/>
    </div>
    <div className='dreamcar-heading'>
        <h2 className='dreamcar-heading-part1'>Enter  to your account</h2>
        <p className='dreamcar-heading-part2'>Access exclusive features by logging back into your account</p>
      </div>
      <div className='dreamcar-form'>
      <div className='dreamcarform-part1'>
        <CssTextField className="dreamcar-formfields" type="number" label=<p className="field1">Present Cost of Your Dream Car</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="dreamcar-formfields" type="number" label=<p className="field2">Year ( to buy)</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='dreamcarform-part2'>
        <CssTextField className="dreamcar-formfields" type="number" label=<p className="field3">Existing Fund for Buy a New Car </p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="dreamcar-formfields" type="number" label=<p className="field4">Estimated Inflation Rate %</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
       <div className='dreamcarform-part3'>
        <CssTextField className="dreamcar-formfields" type="number" label=<p className="field5">Estimated Investment Return %</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="dreamcar-formfields" type="number" label=<p className="field6">Current Yearly Investment for DH</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
  
      </div>
      <div className='dreamcar-line'/>
      <div className='dreamcar-button'>
        <Button><p className='button3'>Next</p></Button>
      </div>
        </div>
        <div className="dreamcar-right"></div>
    </div>
  )
}

export default DreamCar