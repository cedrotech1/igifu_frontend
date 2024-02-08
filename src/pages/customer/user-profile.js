import React from 'react';

import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'; // Importing icons from the 'react-icons' library
import '../../css/main2.css';
import Footer from "../../components/footer";
import Profile from "../../components/profile";

import Menu from "../../components/customerM";

const LandingPage = () => {
  return (
    <>
      <Menu />
      <div style={{marginTop:'1cm'}}> 
      <Profile/>
      </div>
       
      <Footer />
  




      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/js/main.js"></script>

    </>
  );
};

export default LandingPage;
