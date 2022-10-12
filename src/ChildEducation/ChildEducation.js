import React,{useState} from 'react'
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button ,Radio} from "@mui/material"
import "./ChildEducation.css"

function ChildEducation() {
  const[first,setfirst]=useState(true);
  const[second,setsecond]=useState(false);
  const[third,setthird]=useState(false);
  const[fourth,setfourth]=useState(false);
  const[fifth,setfifth]=useState(false);
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
    else if(id===7){
      setfourth(false)
      setfifth(true)
      
    }
    else if(id===8){
      setfourth(true)
      setfifth(false)
      
    }
  };
  return (
    <div className="childeducation">
        <div className="childeducation-left">
     
     <div className='childeducation-heading'>
        <h2 className='childeducation-heading-part1'>Enter  to your account</h2>
        <p className='childeducation-heading-part2'>Access exclusive features by logging back into your account</p>
      </div>
     <form>
      {first && <div className='childeducation-form1'>
      <div className='childeducationform-part1'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field1">How Many Child</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="text" label=<p className="field2">Name</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducationform-part2'>
        <CssTextField className="childeducation-formfields" type="text" label=<p className="field3">Age</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="text" label=<p className="field4">Higher Education Will Start</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducation-line'/>
      <div className='childeducation-button'>
        <Button onClick={()=>{toggle(1)}}><p className='button3'>Next</p></Button>
      </div>
     </div> }
    {second && <div className='childeducation-form2'>
      <div className='childeducationform-part1'>
        <CssTextField className="childeducation-formfields" type="text" label=<p className="field5">Dream Proffesion</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field6">Course Duration</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducationform-part2'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field7">Current Yearly Fees for Course</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field8">Current Yearly Acomdation / Hostel</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducation-line'/>
      <div className='childeducation-button'>
      <Button onClick={()=>{toggle(2)}}><p className='button4'>Previous</p></Button>
        <Button onClick={()=>{toggle(3)}}><p className='button5'>Next</p></Button>
      </div>
     </div>}
     {third && <div className='childeducation-form3'>
      <div className='childeducationform-part1'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field9">Home Trip Total In Course Duration </p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field10">Current Home Trip Cost (per trip)</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducationform-part2'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field11">Total No Of Parents Visit</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field12">Current Parent Trip Cost (per trip)</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducation-line'/>
      <div className='childeducation-button'>
      <Button onClick={()=>{toggle(4)}}><p className='button6'>Previous</p></Button>
        <Button onClick={()=>{toggle(5)}}><p className='button7'>Next</p></Button>
      </div>
     </div>}
     {fourth && <div className='childeducation-form4'>
      <div className='childeducationform-part1'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field13">Covocation Visit Cost </p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field14">Current Any Other livinG / Yearly Expensive</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducationform-part2'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field15">Exisiting Fund Available For Child Education </p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field16">Existing Regular Yearly Investment For Education PUrpose</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducation-line'/>
      <div className='childeducation-button'>
      <Button onClick={()=>{toggle(6)}}><p className='button8'>Previous</p></Button>
        <Button onClick={()=>{toggle(7)}}><p className='button9'>Next</p></Button>
      </div>
     </div>}
     {fifth && <div className='childeducation-form5'>
      <div className='childeducationform-part1'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field17">Expected Inflationn Rate%</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field18">Return On Investment </p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='childeducationform-part2'>
        <CssTextField className="childeducation-formfields" type="number" label=<p className="field19">Future (maturity value of any fund to be received for funding the education )</p> sx={{ input: { color: 'white' , height:"39px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
       
      </div>
      <div className='childeducation-line'/>
      <div className='childeducation-button'>
      <Button onClick={()=>{toggle(8)}}><p className='button10'>Previous</p></Button>
        <Button><p className='button11'>Submit</p></Button>
      </div>
     </div>}
     </form>
     <div className="radio-field">
       <div className="radio"   style={{backgroundColor: first ||second ||third ||fourth ? 'rgb(255, 214, 1)' : '',}}></div>
       <div className="radio1"   style={{backgroundColor: second ||third || fourth ? 'rgb(255, 214, 1)' : '',}}></div>
       <div className="radio2"   style={{backgroundColor: third ||fourth ? 'rgb(255, 214, 1)' : '',}}></div>
       <div className="radio3"   style={{backgroundColor: fourth ? 'rgb(255, 214, 1)' : '',}}></div>
       <div className="radio4"></div>
      </div>
        </div>
        <div className="childeducation-right"></div>
    </div>
  )
}

export default ChildEducation