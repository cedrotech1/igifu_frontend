import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Offcanvas, Button, Nav } from 'react-bootstrap';
import '../../css/main2.css';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'; // Importing icons from the 'react-icons' library

import Menu from "../../components/restoAdminMenu";
import Menu2 from "../../components/restoAdminMenu2";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <body className='mybody'>
      <div className="dashboard">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar (visible on medium devices and larger) */}
            <div className={`col-md-3 d-none d-md-block ${show ? 'sidebar-shift' : ''}`}>
              <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="membery">
                    <center> <img src="assets/img/profile.png" className="img-fluid imagex" alt="" style={{ height: '3cm' }} /></center>
                    <h5 style={{ textAlign: 'center', fontFamily: 'monospace', textTransform: '', fontWeight: 'bold' }}>H.Cedrick</h5>

                    <p style={{ textAlign: 'center', fontFamily: 'monospace', marginBottom: '1cm' }}>
                      Sed autem laudantium dolores.
                    </p>


                  </div>
                  <center>
                    <Menu2 />
                    <center>
                      <div className="d-flex justify-content-center ">
                        <a href="register" className="btn-get-started" style={{ backgroundColor: '#b6b5b5', borderRadius: '6px', fontFamily: 'monospace', textDecoration: 'none', padding: '0.2cm', width: '4cm', marginTop: '3cm', color: 'black' }}>
                          logout
                        </a>
                      </div>
                    </center>
                  </center>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            {/* Main Content */}
            <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 allcontent">
              <div className="row">
                {/* Sidebar Trigger Button (visible on small devices) */}


                {/* Sidebar (visible on medium devices and larger when Offcanvas is closed) */}
                {!show && (
                  <div className="col-md-2 d-none d-md-block d-md-blockx">
                    {/* Your menu items go here */}
                    <Menu />
                  </div>
                )}

                {/* Your dashboard content goes here */}

                <div className={`col-md-10 ${show ? 'content-shift' : ''}`}>

                  <section id="team" className="team">
                    <div className="container" data-aos="fade-up">
                      <div className="row">

                        {/* menu bars */}
                        <div className="col-12 d-md-none">
                          <Button variant="" onClick={() => setShow(!show)}>
                            ☰
                          </Button>
                        </div>


                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                          <div className="row member">

                            <div className=" col-xl-4 col-md-6 d-flex" style={{ backgroundColor: 'whitesmoke' }}>

                              <h1 style={{ fontSize: '40px' }}>23</h1>
                            </div>
                            <div className=" col-xl-7  col-md-6" style={{ margin: '0.1cm' }}>
                              <h5 style={{ textAlign: 'justify' }}>Employees</h5>

                              <p style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                Sed autem laudantium dolores.

                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">


                              </div>
                            </div>

                          </div>

                        </div>


                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                          <div className="row member">

                            <div className=" col-xl-4 col-md-6 d-flex" style={{ backgroundColor: 'whitesmoke' }}>


                            </div>
                            <div className=" col-xl-7  col-md-6" style={{ margin: '0.1cm' }}>
                              <h5 style={{ textAlign: 'justify' }}>Employees</h5>

                              <p style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                Sed autem laudantium dolores.

                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">


                              </div>
                            </div>

                          </div>

                        </div>



                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                          <div className="row member">

                            <div className=" col-xl-4 col-md-6 d-flex" style={{ backgroundColor: 'whitesmoke' }}>


                            </div>
                            <div className=" col-xl-7  col-md-6" style={{ margin: '0cm' }}>
                              <h5 style={{ textAlign: 'justify' }}>Employees</h5>

                              <p style={{ textAlign: 'justify', fontFamily: 'sans-serif' }}>
                                Sed autem laudantium dolores.

                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">


                              </div>
                            </div>

                          </div>

                        </div>



                      </div>
                    </div>
                  </section>



                  <section id="team" className="team">
                    <div className="container" data-aos="fade-up">
                      <div className="row">
                        <div className="" data-aos="fade-up" data-aos-delay="100">
                          <div className="row member">
                            <div className=" col-xl-6 col-md-6 d-flex">
                              <img src="assets/img/hero-img.svg" className="img-fluid" alt="" />

                            </div>
                            <div className=" col-xl-6 col-md-6" style={{ padding: '0.4cm' }}>
                              <h3 style={{ textAlign: 'justify' }}>Vip category</h3>




                              <p style={{ textAlign: 'justify', marginTop: '1cm' }}>
                                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                              </p>

                              <p style={{ fontFamily: 'monospace', marginTop: '-0.5cm', textAlign: 'right', fontSize: '20px' }}>
                                Price:9000 Rwf/ mounth
                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">

                                <a
                                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                  className="glightbox btn-watch-video d-flex align-items-center"
                                  style={{ backgroundColor: 'whitesmoke', borderRadius: '6px', width: '4cm', textAlign: 'center', padding: '0.2cm', marginTop: '0.5cm', textDecoration: 'none' }}
                                >
                                  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                                  restaurent
                                </a>
                              </div>
                            </div>
                          </div>


                        </div>



                      </div>
                    </div>
                  </section>











                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

    </body>
  );
};

export default Dashboard;
