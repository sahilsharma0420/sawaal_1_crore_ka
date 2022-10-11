import React from 'react'
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
import "./DreamHome.css"
function DreamHome() {
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
    <div className="dreamhome">
        <div className="dreamhome-left">
        <div className='dreamhome-image-container'>
      <img  className='dreamhome-image' src='https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg' alt='not  found'/>
     </div>
     <div className='dreamcar-heading'>
        <h2 className='dreamhome-heading-part1'>Enter  to your account</h2>
        <p className='dreamhome-heading-part2'>Access exclusive features by logging back into your account</p>
      </div>
      <div className='dreamhome-form'>
      <div className='dreamhomeform-part1'>
        <CssTextField className="dreamhome-formfields" type="number" label=<p className="field1">Present Cost (DH)</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="dreamhome-formfields" type="number" label=<p className="field2">Year ( to buy)</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='dreamhomeform-part2'>
        <CssTextField className="dreamhome-formfields" type="number" label=<p className="field3">Existing Fund for this Goal </p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="dreamhome-formfields" type="number" label=<p className="field4">Estimated Inflation Rate %</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
       <div className='dreamhomeform-part3'>
        <CssTextField className="dreamhome-formfields" type="number" label=<p className="field5">Estimated Investment Return %</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="dreamhome-formfields" type="number" label=<p className="field6">Current Yearly Investment for DH</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
  
      </div>
      <div className='dreamhome-line'/>
      <div className='dreamhome-button'>
        <Button><p className='button3'>Next</p></Button>
      </div>
        </div>
        <div className="dreamhome-right"></div>
    </div>
  )
}

export default DreamHome