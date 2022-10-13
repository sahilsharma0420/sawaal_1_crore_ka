import React from "react";
import "./Home.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Homecard = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
      
          <div className={`planing${value.id}`} key={index}>
          <div className="rupee"> 
            <CurrencyRupeeIcon style={{fontSize:"22px"}} />
            </div>
           <center> <div className="card-name">
            {value.name}
            </div></center>
          </div>
      ))}
      ;
    </>
  );
};
export default Homecard;
