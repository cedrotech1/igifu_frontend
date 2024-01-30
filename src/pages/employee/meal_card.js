import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Offcanvas, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Statistics from "../../components/statistics-component";
import Menu from "../../components/employeeeMenu";
import Menu2 from "../../components/employeeMenu2";

const Dashboard = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [Cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const [EmployeesAdmin, setEmployeesAdmin] = useState([]);

  const { id } = useParams();
  const [resid, setResId] = useState('');


  useEffect(() => {
    const fetchEmployeesAdmin = async () => {
      try {

        const response = await fetch(`http://localhost:5000/api/v1/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (data.success) {
          setEmployeesAdmin([data.user]);
        } else {
          console.error('Failed to fetch EmployeesAdmin:', data.message);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching EmployeesAdmin:', error);
        setLoading(false);
      }
    };

    fetchEmployeesAdmin();
  }, []);




  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      const res = parsedUser.restaurents;
      setResId(res);
      console.log(resid)
    } else {
      console.error('User information not found in local storage');
    }
  }, [resid]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/card/mycard/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          const allCards = data.Cardses;
          setCards(allCards);
          console.log(allCards)
        } else {
          console.error('Failed to fetch Cards:', data.message);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching Cards:', error);
        setLoading(false);
      }
    };

    fetchCards();
  }, [token]);
  const handleView = (id) => { navigate(`../emplyoyee_meal_cardx/${id}`); }
  return (
    <body className='mybody' >
      <div className="dashboard" style={{ backgroundColor: 'whitesmoke' }}>
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
                    <center> <img src="assets/img/profile.png" className="img-fluid imagex" alt="" /></center>
                    <h5 className='names'>H.Cedrick</h5>
                    <p className='titlex'>
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
            <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 allcontent">
              <div className="row">
                {!show && (
                  <div className="col-md-2 d-none d-md-block d-md-blockx">
                    <Menu />
                  </div>
                )}
                <div className={`col-md-10 ${show ? 'content-shift' : ''}`}>

                  <section id="team" className="team">
                    <div className="container" data-aos="fade-up" style={{ marginLeft: '-0.2cm' }}>
                      <div className="row">
                        <div className="col-12 d-md-none">
                          <Button variant="" onClick={() => setShow(!show)}>
                            ☰
                          </Button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="team" className="team" style={{ backgroundColor: 'whitesmoke' }}>
                    <div className="container position-relative">
                      <div className="row gy-5" data-aos="fade-in">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start" style={{ marginTop: '0cm', fontFamily: 'monospace' }}>
                          <div className="row gy-4">
                            {EmployeesAdmin.map((Employee) => (
                              <div key={Employee.id} className="col-xl-12 col-md-12" data-aos="fade-up" data-aos-delay={100 * Employee.id} style={{ padding: '' }}>
                                <div className="member col-xl-12">
                                  <img src='/assets/img/images (3).jpeg' className="img-fluid" alt="" style={{ height: 'auto', padding: '0px', width: '100%', borderRadius: '7px' }} />
                                  <h4 style={{ textAlign: 'center' }}>{Employee.firstname} &nbsp;{Employee.lastname}</h4>

                                  <p style={{ textAlign: 'justify', fontFamily: 'cursive', textAlign: 'center' }}>
                                    {Employee.status}
                                  </p>
                                  <p style={{ textAlign: 'center', fontStyle: 'italic', fontPalette: '13px', backgroundColor: 'whitesmoke', padding: '0.4cm', marginTop: '20px', borderRadius: '6px' }}>
                                    <BiMap className="" style={{ color: 'black' }} />&nbsp;&nbsp;{Employee.address} <br />
                                    <BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} />&nbsp;&nbsp;{Employee.email} <br />
                                    <BiPhone />&nbsp;&nbsp;{Employee.phone}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2" style={{ marginTop: '-2cm', fontFamily: 'monospace', color: 'white' }}>
                          {Cards.map((card) => (
                            <div onClick={() => handleView(card.id)} className="row member" style={{ marginTop: '1.7cm' }}>
                              <div className="col-xl-6 col-md-6 d-flex">
                                <img src='/assets/img/card.png' className="img-fluid" alt="" />
                              </div>
                              <div className="col-xl-6 col-md-6" style={{ paddingTop: '1cm' }}>
                                <h4 style={{ color: 'black', textAlign: 'justify' }}>MEAL CARD</h4>
                                <p style={{ marginLeft: '-1cm', textAlign: 'justify' }}>
                                  {card.cardUser && (
                                    <div>
                                      <strong>User:</strong> {card.cardUser.firstname} {card.cardUser.lastname} <br />
                                      <strong>Restaurant:</strong> {card.categories.resto.name}<br />
                                      <strong>Card category:</strong> {card.categories.name}<br />
                                      <strong>Duration:</strong> {card.times} times remain<br />
                                      <strong>Date:</strong> {card.createdAt}
                                    </div>
                                  )}
                                </p>
                              </div>
                            </div>
                          ))}
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
      <ToastContainer />
    </body>
  );
};

export default Dashboard;
