// import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing/home";
import List from "./pages/customer/reslist";
import Details from "./pages/customer/RestoDetails";
import Contact from "./pages/landing/contact";
import OneRes from "./pages/customer/oneres";
import Confirm from "./pages/customer/confirms";
import About from "./pages/landing/about";
import Login from "./pages/landing/login";
import CustomerRegister from "./pages/landing/customer_register";
import RestRegister from "./pages/landing/restaurent_admin";
import Dash from "./pages/Admin/dash";
import Statistics from "./pages/Admin/statistics";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        < Route path="/" element={<Home />} exact={true} />
        < Route path="/list" element={<List />} exact={true} />
        < Route path="/details" element={<Details />} exact={true} />
        < Route path="/contact" element={<Contact />} exact={true} />
        < Route path="/one" element={<OneRes />} exact={true} />
        < Route path="/confirm" element={<Confirm />} exact={true} />
        < Route path="/about" element={<About />} exact={true} />
        < Route path="/login" element={<Login />} exact={true} />
        < Route path="/register" element={<CustomerRegister />} exact={true} /> 
        < Route path="/restoAdmin" element={<RestRegister />} exact={true} /> 
        < Route path="/dash" element={<Dash />} exact={true} /> 

        < Route path="/statistics" element={<Statistics />} exact={true} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
