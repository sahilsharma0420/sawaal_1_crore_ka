import './App.css';
import {BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Account from "./Account/Account"
import ChildMarriage from "./ChildMarriage/ChildMarriage";
import ChildEducation from "./ChildEducation/ChildEducation";
import DreamCar from "./DreamCar/DreamCar";
import DreamHome from "./DreamHome/DreamHome";
import  Navbar  from "./Navbar/Navbar";
import Home from "./Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div >

    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/DreamCar" element={<DreamCar />} />
      <Route path="/DreamHome" element={<DreamHome />} />
      <Route path="/ChildEducation" element={<ChildEducation />} />
      <Route path="/ChildMarriage" element={<ChildMarriage />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/sawaal_1_crore_ka" element={<Home />} />
      <Route path="/Account" element={<Account />} />
     
      <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
