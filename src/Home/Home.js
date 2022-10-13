import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./Home.css";
import { homeapi } from "./Homedata";
import Homecard from "./Homecard";
function Home() {
  return (
    <div className="home">
      <div className="home-upper"></div>
      <div className="home-lower">
      <Homecard details={homeapi}/>
      </div>
    </div>
  )
}

export default Home