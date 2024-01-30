
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components from the landing pages
import Home from "./pages/landing/home";
import Contact from "./pages/landing/contact";
import About from "./pages/landing/about";
import Login from "./pages/landing/login";
import CustomerRegister from "./pages/landing/customer_register";
import RestRegister from "./pages/landing/restaurent_admin";

// Importing components from the customer pages
import List from "./pages/customer/reslist";
import Details from "./pages/customer/RestoDetails";
import OneRes from "./pages/customer/oneres";
import Confirm from "./pages/customer/confirms";
import Mycards from "./pages/customer/mycards";

// Importing components from the Admin pages
import Dash from "./pages/Admin/dash";
import Statistics from "./pages/Admin/statistics";
import Restos from "./pages/Admin/restos";
import OneResto from "./pages/Admin/oneResto";

// Importing components from the Admin resto pages
import Dasha from "./pages/AdminResto/homePage";
import Card from "./pages/AdminResto/Card-category";
import Statisticsa from "./pages/AdminResto/statistics";
import Onecard from "./pages/AdminResto/oneResto";
import Rcustomer from "./pages/AdminResto/customers";
// import OneRestoa from "./pages/AdminResto/oneResto";

// Importing components from the Employee  pages
import Customers from "./pages/employee/customers";
import Has from "./pages/employee/meal_card";
import Not from "./pages/employee/meal_card_not";
import View from "./pages/employee/CustomerReqest";
import Confirmx from "./pages/employee/customers_confirm";
import EmployeeStatistic from "./pages/employee/statistics";
// import OneRestoa from "./pages/AdminResto/oneResto";


// Main App component
function App() {
  return (
    // Set up the BrowserRouter for handling routes
    <BrowserRouter>
      {/* Define the routes using the Routes component */}
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/contact" element={<Contact />} exact={true} />
        <Route path="/about" element={<About />} exact={true} />
        <Route path="/login" element={<Login />} exact={true} />
        <Route path="/register" element={<CustomerRegister />} exact={true} />
        <Route path="/restoAdmin" element={<RestRegister />} exact={true} />
        

        {/* Customer Pages */}
        <Route path="/list" element={<List />} exact={true} />
        <Route path="/details/:id" element={<Details />} exact={true} />
        <Route path="/one/:id" element={<OneRes />} exact={true} />
        <Route path="/confirm" element={<Confirm />} exact={true} />
        <Route path="/mycards" element={<Mycards />} exact={true} />

        {/* Admin Pages */}
        <Route path="/admin_dash" element={<Dash />} exact={true} />
        <Route path="/admin_statistics" element={<Statistics />} exact={true} />
        <Route path="/admin_restourent" element={<Restos />} exact={true} />
        <Route path="/admin_view_one_rest" element={<OneResto />} exact={true} />
        

        {/* emplyoyee Pages */}
        <Route path="/emplyoyee_customers" element={<Customers />} exact={true} />
        <Route path="/emplyoyee_customers_request" element={<View />} exact={true} />
        <Route path="/emplyoyee_confirms" element={<Confirmx />} exact={true} />
        <Route path="/emplyoyee_statistics" element={<EmployeeStatistic />} exact={true} />
        <Route path="/emplyoyee_meal_card/:id" element={<Has />} exact={true} />
        <Route path="/emplyoyee_meal_cardx/:id" element={<Not />} exact={true} />
        {/* Admin Resto Pages */}
        <Route path="/resto_dash" element={<Dasha />} exact={true} />
        <Route path="/resto_card/" element={<Card />} exact={true} />
        <Route path="/resto_statistics" element={<Statisticsa />} exact={true} />
        <Route path="/resto_one_card" element={<Onecard />} exact={true} />
        <Route path="/resto_customers" element={<Rcustomer />} exact={true} />
      
      </Routes>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
