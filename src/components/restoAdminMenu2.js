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
  const iconMap = [
    { name: 'Dashboard', icon: <BsHouseDoor />, href: 'resto_statistics' },
    { name: 'Our card', icon: <GiHotMeal />, href: 'resto_card' },
    { name: 'Employee', icon: <BiUser />, href: 'resto_dash' },
    { name: 'Customers', icon: <BiUser />, href: 'resto_customers' },
    { name: 'Our Info', icon: <BiFile />, href: 'resto_one_card' },
    { name: 'Settings', icon: <BiCog />, href: '#settings' },
  ];
  return (
    <>
         <Nav className="flex-column">
          {iconMap.map((menuItem, index) => (
            // Each menu item has its own href attribute
            <Nav.Link key={index} href={menuItem.href} className="nav-link">
              {menuItem.icon} {menuItem.name}
            </Nav.Link>
          ))}
        </Nav>
    </>
  );
};

export default LandingPage;
