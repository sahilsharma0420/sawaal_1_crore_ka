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
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Account />} />
      <Route path="/modelcontent" element={<Modelcontent />} />
      <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
