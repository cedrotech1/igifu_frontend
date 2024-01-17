import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { BiUser, BiCog, BiFile } from 'react-icons/bi';
import '../css/main2.css';

import { BsHouseDoor } from 'react-icons/bs';
import { GiHotMeal } from 'react-icons/gi';

const LandingPage = () => {
  const [show, setShow] = useState(false);

  // Mapping between menu item names and corresponding icons
  const iconMap = [
    { name: 'Dashboard', icon: <BsHouseDoor />, href: 'emplyoyee_statistics' },
    { name: 'Meal card', icon: <GiHotMeal />, href: 'emplyoyee_meal_card' },
    { name: 'Meal card 2', icon: <GiHotMeal />, href: 'emplyoyee_meal_cardx' },
    { name: 'Customers', icon: <BiUser />, href: 'emplyoyee_customers' },
    { name: 'Our Info', icon: <BiFile />, href: 'emplyoyee_statistics' },
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
