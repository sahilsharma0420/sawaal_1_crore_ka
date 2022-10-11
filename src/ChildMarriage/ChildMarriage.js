import React,{useState} from 'react'
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button ,Radio} from "@mui/material"
import "./ChildMarriage.css"
function ChildMarriage() {
  const[first,setfirst]=useState(true);
  const[second,setsecond]=useState(false);
  const[third,setthird]=useState(false);
  const[fourth,setfourth]=useState(false);
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
  const toggle=(id)=>{
    if(id===1){
     setfirst(false)
     setsecond(true)
    
    }

    else if(id===2){
     setsecond(false)
     setfirst(true)
    }
    else if(id===3){
      setsecond(false)
      setthird(true)
    }
    else if(id===4){
      setthird(false)
      setsecond(true)
    }
    else if(id===5){
      setthird(false)
      setfourth(true)
    }
    else if(id===6){
      setfourth(false)
      setthird(true)
      
    }
  };
  return (
    <div className="childmarriage">
        <div className="childmarriage-left">
        <div className='childmarriage-image-container'>
      <img  className='childmarriage-image' src='https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg' alt='not  found'/>
     </div>
     <div className='childmarriage-heading'>
        <h2 className='childmarriage-heading-part1'>Enter  to your account</h2>
        <p className='childmarriage-heading-part2'>Access exclusive features by logging back into your account</p>
      </div>
      <form>
      {first && <div className='childmarriage-form1'>
      <div className='childmarriageform-part1'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field1">Name of Child </p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field2">Marriage Planing Ffter Years</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriageform-part2'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field3">House Renovation Expenses</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field4">Gold and Ornaments</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriage-line'/>
      <div className='childmarriage-button'>
        <Button onClick={()=>{toggle(1)}}><p className='button3'>Next</p></Button>
      </div>
     </div> }
    {second && <div className='childmarriage-form2'>
      <div className='childmarriageform-part1'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field5">Banquent and Decoration</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field6">Honeymoon Trip</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriageform-part2'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field7">Social Gifting</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field8">Card Printing Video And Photography</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriage-line'/>
      <div className='childmarriage-button'>
      <Button onClick={()=>{toggle(2)}}><p className='button4'>Previous</p></Button>
        <Button onClick={()=>{toggle(3)}}><p className='button5'>Next</p></Button>
      </div>
     </div>}
     {third && <div className='childmarriage-form3'>
      <div className='childmarriageform-part1'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field9">Garments</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field10">Other Expenses</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriageform-part2'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field11">Any Miscellaneauos Expenses Other Then Above</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field12">Projected Inflation Rate @ %</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriage-line'/>
      <div className='childmarriage-button'>
      <Button onClick={()=>{toggle(4)}}><p className='button6'>Previous</p></Button>
        <Button onClick={()=>{toggle(5)}}><p className='button7'>Next</p></Button>
      </div>
     </div>}
     {fourth && <div className='childmarriage-form4'>
      <div className='childmarriageform-part1'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field13">Value Of Existing Available Fund + Gold Ornaments Kept For Marriage Purpose</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field14">Currently Regular Yearly Investment For Marriage Purpose</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriageform-part2'>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field15">Any Fund To Be Receives On Marriage( maturiya of FD , policy )</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childmarriage-formfields" type="text" label=<p className="field16">Projected Return On Investment</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childmarriage-line'/>
      <div className='childmarriage-button'>
      <Button onClick={()=>{toggle(6)}}><p className='button8'>Previous</p></Button>
        <Button><p className='button9'>Submit</p></Button>
      </div>
     </div>}
     </form>
     <div className="radio-field">
       <div className="radio"   style={{backgroundColor: first ||second ||third ? 'rgb(255, 214, 1)' : '',}}></div>
       <div className="radio1"   style={{backgroundColor: second ||third ? 'rgb(255, 214, 1)' : '',}}></div>
       <div className="radio2"   style={{backgroundColor: third ? 'rgb(255, 214, 1)' : '',}}></div>
       <div className="radio3"></div>
      </div>
        </div>
        <div className="childmarriage-right"></div>
    </div>
  )
}

export default ChildMarriage