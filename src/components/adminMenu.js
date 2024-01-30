import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { BiUser, BiCog, BiFile } from 'react-icons/bi';
import '../css/main2.css';

import { BsHouseDoor } from 'react-icons/bs';
import { GiHotMeal } from 'react-icons/gi';

const LandingPage = () => {
  const [show, setShow] = useState(false);

  // Mapping between menu item names, corresponding icons, and href
  const iconMap = {
    Dashboard: { icon: <BsHouseDoor />, href: 'admin_statistics' },
    Restaurent: { icon: <GiHotMeal />, href: 'admin_restourent' },
    Users: { icon: <BiUser />, href: 'admin_dash' },
    'Our Info': { icon: <BiFile />, href: 'admin_view_one_rest' },
    Settings: { icon: <BiCog />, href: '#settings' },
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
            <Nav.Link key={menuItem} href={iconMap[menuItem].href} className="nav-link">
              {iconMap[menuItem].icon} {menuItem}
            </Nav.Link>
          ))}
        </Nav>

        <div className="d-flex justify-content-center">
          {/* Logout link */}
          <a href="login" className="btn-get-started1">
            logout
          </a>
        </div>
      </center>
    </>
  );
};

export default LandingPage;
