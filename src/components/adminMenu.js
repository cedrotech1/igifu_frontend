import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav } from 'react-bootstrap';
import {  BiUser, BiCog,BiFile } from 'react-icons/bi';
import '../css/main2.css';

import { BsHouseDoor } from 'react-icons/bs';
import { GiHotMeal } from 'react-icons/gi';

const LandingPage = () => {
  const [show, setShow] = useState(false);

  // Mapping between menu item names and corresponding icons
  const iconMap = {
    Dashboard: <BsHouseDoor />,
    Restaurent: <GiHotMeal />,
    Users: <BiUser />,
    'Our Info': <BiFile />,
    Settings: <BiCog />,
  };

  return (
    <>
      <div className="membery">
        <center>
          <img src="assets/img/profile.png" className="img-fluid imagex" alt="" />
        </center>
        <h5>H.Cedrick</h5>
        <p>system admin</p>
      </div>

      <center>
        <Nav className="flex-column">
          {Object.keys(iconMap).map((menuItem) => (
            <Nav.Link key={menuItem} href="#" className="nav-link">
              {iconMap[menuItem]} {menuItem}
            </Nav.Link>
          ))}
        </Nav>

        <div className="d-flex justify-content-center">
          <a href="register" className="btn-get-started">
            logout
          </a>
        </div>
      </center>
    </>
  );
};

export default LandingPage;
