
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, Button, Nav } from 'react-bootstrap';
import '../css/main2.css'



const LandingPage = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={`col-md-3 d-none d-md-block ${show ? 'sidebar-shift' : ''}`}>
        <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="membery">
              <center>
                <img src="assets/img/profile.png" className="img-fluid imagex" alt="" style={{ height: '3cm' }} />
              </center>
              <h5 style={{ textAlign: 'center', fontFamily: 'monospace', textTransform: '', fontWeight: 'bold' }}>H.Cedrick</h5>
              <p style={{ textAlign: 'center', fontFamily: 'monospace', marginBottom: '1cm' }}>
                Sed autem laudantium dolores.
              </p>
            </div>
            <center>
              <Nav className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="list">restaurent</Nav.Link>
                <Nav.Link href="login">logout</Nav.Link>
              </Nav>
              <div className="d-flex justify-content-center">
                <a
                  href="register"
                  className="btn-get-started"
                  style={{
                    backgroundColor: '#b6b5b5',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    textDecoration: 'none',
                    padding: '0.2cm',
                    width: '4cm',
                    marginTop: '3cm',
                    color: 'black',
                  }}
                >
                  logout
                </a>
              </div>
            </center>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* <div className="col-6 d-md-none">
      
      </div> */}

      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1 style={{ color: 'black', fontStyle: 'bold', fontFamily: 'monospace' }}>Meal_card<span>.</span></h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>Home</a>
              </li>
              <li>
                <a href="list" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>restaurent</a>
              </li>
              {/* <li>
                <a href="one" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>one</a>
              </li>
              <li>
                <a href="details" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>card</a>
              </li> */}

              {/* <li>
                <a href="contact" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>Contact</a>
              </li>
              <li>
                <a href="about" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>About</a>
              </li>
              <li>
                <a href="confirm" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>Confirm</a> */}
              {/* </li> */}
              <li>
                <a href="login" style={{ color: 'black', fontFamily: 'monospace', fontSize: '20px' }}>logout</a>
              </li>
            </ul>
          </nav>

          <Button className='bx' variant="" onClick={() => setShow(!show)} style={{ backgroundColor: 'whitesmoke', borderRadius: '6px', fontFamily: 'monospace', color: 'black' }}>
            ☰
          </Button>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
