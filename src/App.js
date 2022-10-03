import './App.css';
import {BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Account from "./Account/Account"
import  Modelcontent  from "./Modelcontent/Modelcontent";
function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/sawaal_1_crore_ka" element={<Account />} />
      <Route path="/Modelcontent" element={<Modelcontent />} />
      <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
