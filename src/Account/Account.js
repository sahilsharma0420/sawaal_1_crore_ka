import "./Account.css"
import React,{useState} from "react"
import {TextField} from "@mui/material"
import {styled} from "@mui/material/styles"
import {Button} from "@mui/material"
import  { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function Account() {
  const [value, setValue] = useState();

    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
    };
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
    <div className='account'>
    <div className='account-left'>
      <img className='account-image' src='https://sawaal1croreka.store/static/media/LOGO.434515af13a87abaa220.jpg' alt='not  found'/>
      <div className='account-heading'>
        <h2 className='account-heading-part1'>Create account</h2>
        <p className='account-heading-part2'>Get access to exclusive features by creating an account</p>
      </div>
      <div className='account-form'>
      <div className='accountform-part1'>
     
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
          label=<p className="date-of-birth ">Date of Birth</p>
         className="css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input"
          sx={{label:{borderColor:"white"}}}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <CssTextField {...params}  className="account-formfields"    sx={{input:{color:"white"},label:{color:"#fff",borderColor:"white"}}}/>}
        />
      </LocalizationProvider>

        <CssTextField className="account-formfields" type="number" label="Retirement Age" sx={{ input: { color: 'white' } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      <div className='accountform-part2'>
      <CssTextField className="account-formfields" type="number" label="Current Monthly Expenses of your family" sx={{ input: { color: 'white' } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/> 
      <CssTextField className="account-formfields" type="number" label="Estimated inflation rate (in %)" sx={{ input: { color: 'white' } }} variant='outlined' InputLabelProps={{className:"textfield-label"}} size='small' color=''/>
      </div>
      </div>
      <div className='account-line'/>
      <div className='account-button'>
        <Button><p className='button'>Next</p></Button>
      </div>
    </div>
    <div className='account-right'></div>
    </div>
  )
}

export default Account