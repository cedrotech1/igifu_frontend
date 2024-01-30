import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { BiUser, BiCog, BiFile } from 'react-icons/bi';
import '../css/main2.css';

import { BsHouseDoor } from 'react-icons/bs';
import { GiHotMeal } from 'react-icons/gi';

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      const userStatus = parsedUser.status;
      setStatus(userStatus);
    } else {
      console.error('User information not found in local storage');
    }
  }, []);

  // Mapping between menu item names, corresponding icons, and href
  const iconMap = [
    { name: 'Dashboard', icon: <BsHouseDoor />, href: 'resto_statistics' },
    { name: 'Our card', icon: <GiHotMeal />, href: 'resto_card' },
    { name: 'Employee', icon: <BiUser />, href: 'resto_dash' },
    // { name: 'Customers', icon: <BiUser />, href: 'resto_customers' },
    { name: 'Our Info', icon: <BiFile />, href: 'resto_one_card' },
    { name: 'Settings', icon: <BiCog />, href: '#settings' },
  ];

  return (
    <>
      <Nav className="flex-column">
        {status === 'active' ? (
          iconMap.map((menuItem, index) => (
            // Each menu item has its own href attribute
            <Nav.Link key={index} href={menuItem.href} className="nav-link">
              {menuItem.icon} {menuItem.name}
            </Nav.Link>
          ))
        ) : (
          <p style={{color:'red'}}>inactive account</p>
        )}
      </Nav>
    </>
  );
};

export default LandingPage;
