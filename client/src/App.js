import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import Navbar from "./components/Navbar/Navbar";
import AddTransaction from "./components/Forms/AddTransaction";
import AccountDashboard from "./components/Dashboard/AccountDashboard";
import AccountDetails from "./components/Dashboard/AccountDetails";
import AddAccount from "./components/Forms/AddAccount";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path = "/login" element={<Login/> }/>
        <Route path = "/register" element={<Register/> }/>
        <Route path = "/add-transaction/:id" element={<AddTransaction/> }/>
        <Route path = "/dashboard" element={<AccountDashboard/> }/>
        <Route path = "/account-details/:accountID" element={<AccountDetails/> }/>
        <Route path = "/dashboard/accounts/create" element={<AddAccount /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
