import './App.css';
import {BrowserRouter, Routes, Route ,Navigate } from "react-router-dom";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Account from "./Account/Account"
function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/account" element={<Account />} />
      <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
