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
          <Nav className="flex-column">
          {Object.keys(iconMap).map((menuItem) => (
            <Nav.Link key={menuItem} href="#" className="nav-link">
              {iconMap[menuItem]} {menuItem}
            </Nav.Link>
          ))}
        </Nav>
    </>
  );
};

export default LandingPage;
