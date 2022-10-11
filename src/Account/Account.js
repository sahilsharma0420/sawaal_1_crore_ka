import "./Account.css"
import React,{useState} from "react"
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
import  { Dayjs } from 'dayjs';
import "./modelcontent.css";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import {useNavigate} from "react-router-dom";
function Account() {
  const history =useNavigate();

  const [value, setValue] = useState();
  const [registration, setregistration] = useState("");
  const [expenses, setexpenses] = useState();
  const [inflation, setinflation] = useState();
  const [model,setmodel] = useState(false);
    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
    };
    const Modelcontent=()=>{
      if(!value || !expenses || !inflation || !registration){
        alert("Please fill the fields");
      }
      else{
        
        setmodel(true);
      }
    }
    const Cross=()=>{
      setmodel(false)
    }
    const registrationpage=()=>{
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
    <>
    <div className='account'>
    <div className='account-left'>
    <div className='account-image-container'>
      <img  className='account-image' src='https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg' alt='not  found'/>
     </div>
      <div className='account-heading'>
        <h2 className='account-heading-part1'>Create account</h2>
        <p className='account-heading-part2'>Get access to exclusive features by creating an account</p>
      </div>
     
      {model ?
     <>
      <div className="model-content">
        
        <div className="model-content-body">
          <p>
            Your Estimated Monthly Expenses at age 60 after retirement will be
            <span className="span1">₹1016</span>
          </p>
          <p>
            It’s Easy to understand that your monthly expenses will be
            <span className="span2">3808%</span>
            higher than your current monthly expenses.
          </p>
          <p>
            It’s tough to manage your post retirement expenses, as your salary
            or income generally reduces drastically after retirement. So you
            have to plan your retirement well in advance.
          </p>
          <p>
            Planning your retirement is not a child’s play, it took years of
            planning and execution.
          </p>
          <p>
            Without proper guidance in creating retirement corpus, one can land
            up in a financial trouble at retirement age.
          </p>
          <p>
            To find out “HOW LONG YOUR RETIREMENT CORPUS CAN SUPPORT YOUR FAMILY
            AFTER YOUR RETIREMENT” please click here.
          </p>
          <p>
            Ofcourse, we need quite a few information about your earnings,
            expenses, investments and perception on financial planning, don’t
            worry, your data is safe and will not be share it with any third
            party, it’s our promise.
          </p>
          <p>
            So let’s go and “CHECK THAT YOUR PLANNING ON RETIRMENT CORPUS IS IN
            THE RIGHT DIRECTION OR NOT” please 
            <span className="span3">
              Already have an account?
             <span className="span4" onClick={registrationpage} >click here.</span>
            </span>
          </p>
        </div>
        <div className="back">
          <p onClick={Cross}>Back</p>
        </div>
      </div>
      </> :
      <>
      <div className='account-form'>
      <div className='accountform-part1'>
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
          label=<p className="date-of-birth ">Date of Birth</p>
  
          sx={{label:{borderColor:"white"}}}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <CssTextField {...params}  className="account-formfields"    sx={{input:{color:"white"},label:{color:"#fff",borderColor:"white"}}}/>}
        />
      </LocalizationProvider>

        <CssTextField className="account-formfields" value={registration}  onChange={(e)=>setregistration(e.target.value)} type="number" label=<p className="retirement">Retirement Age</p> sx={{ input: { color: 'white', height:"30px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='accountform-part2'>
      <CssTextField className="account-formfields" value={expenses} onChange={(e)=>setexpenses(e.target.value)}  label=<p className="expenses">Current Monthly Expenses of your family</p>  sx={{ input: { color: 'white', height:"30px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/> 
      <CssTextField className="account-formfields" value={inflation} onChange={(e)=>setinflation(e.target.value)} type="number" label=<p className="inflation">Estimated inflation rate (in %)</p> sx={{ input: { color: 'white' , height:"30px" } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      </div>
      <div className='account-line'/>
      <div className='account-button'>
        <Button onClick={Modelcontent}><p className='button'>Next</p></Button>
      </div>
      </>
    }
    </div>
    <div className='account-right' ></div>
    </div>
     
    </>
  )
}

export default Account