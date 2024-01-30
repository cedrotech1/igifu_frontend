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
      <div className="membery">
        <center>
          <img src="assets/img/profile.png" className="img-fluid imagex" alt="" />
        </center>
        <h5>H.Cedrick</h5>
        {status === 'active' ? (
          <>
            <center>
              <Nav className="flex-column">
                {iconMap.map((menuItem, index) => (
                  <Nav.Link key={index} href={menuItem.href} className="nav-link">
                    {menuItem.icon} {menuItem.name}
                  </Nav.Link>
                ))}
              </Nav>

              <div className="d-flex justify-content-center">
                <a href="login" className="btn-get-started1">
                  Logout
                </a>
              </div>
            </center>
          </>
        ) : (
          <> 
          <p style={{color:'red',marginBottom:'5cm'}}>inactive account</p>
                      <center>
              

              <div className="d-flex justify-content-center">
                <a href="login" className="btn-get-started1">
                  Logout
                </a>
              </div>
            </center>
          </>
         
          
        )}
      </div>
    </>
  );
};

export default LandingPage;
