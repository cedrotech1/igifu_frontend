
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Offcanvas, Button, Nav } from 'react-bootstrap';
import '../../css/main2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Menu from "../../components/adminMenu";
import Menu2 from "../../components/adminMenuRes";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const [restaurantsAdmin, setRestaurantsAdmin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantsAdmin = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/v1/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          // Ensure that 'users' is an array before filtering
          const usersArray = Array.isArray(data.users) ? data.users : [];
          const filteredUsers = usersArray.filter(user => user.role === 'restaurentadmin');

          setRestaurantsAdmin(filteredUsers);

          console.log(filteredUsers);
        } else {
          console.error('Failed to fetch restaurantsAdmin:', data.message);
        }

        // Set loading to false after fetching data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurantsAdmin:', error);
        // Set loading to false in case of an error
        setLoading(false);
      }
    };

    fetchRestaurantsAdmin();
  }, []);


  const handleView = (userId) => {
    // Handle view logic
    console.log(`View user with ID: ${userId}`);
  };

  const handleModify = (userId) => {
    // Handle modify logic
    console.log(`Modify user with ID: ${userId}`);
  };
  const handleDeactivate = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/v1/users/deactivate/${userId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const res = await response.json();
        toast.success(res.message);
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error(`Failed to activate user with ID ${userId}:`, errorData.message);
      }
    } catch (error) {
      console.error('Error activating user:', error);
    }
  };

  const handleActivate = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/v1/users/activate/${userId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const res = await response.json();
        toast.success(res.message);
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error(`Failed to activate user with ID ${userId}:`, errorData.message);
      }
    } catch (error) {
      console.error('Error activating user:', error);
    }
  };

  // ...

const renderActivationButton = (userId, userStatus) => {
  const buttonStyle = {
    backgroundColor: 'white',
    border: '0px',
  };

  if (userStatus === 'active') {
    return (
      <button onClick={() => handleDeactivate(userId)} style={buttonStyle}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    );
  } else if (userStatus === 'inactive') {
    return (
      <button onClick={() => handleActivate(userId)} style={buttonStyle}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    );
  } else {
    return null;
  }
};

// ...

{Array.isArray(restaurantsAdmin) && restaurantsAdmin.length > 0 ? (
  restaurantsAdmin.map((user, index) => (
    <tr key={user.id}>
      <th scope="row">{index + 1}</th>
      <td>{user.firstname} {user.lastname}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.status}</td>
      <td>
        <button onClick={() => handleView(user.id)} style={{ backgroundColor: 'white', border: '0px' }}>
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button onClick={() => handleModify(user.id)} style={{ backgroundColor: 'white', border: '0px' }}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        {renderActivationButton(user.id, user.status)}
      </td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="6">No data available</td>
  </tr>
)}
// ...

  


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

                  {/* Button to open the modal */}
                  <div style={{ textAlign: 'right',marginBottom:'1cm' }}>
                    <input
                    placeholder='Filter here...'
                      variant=""
                      onClick={handleToggleModal}
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        fontFamily: 'monospace',
                        textDecoration: 'none',
                        padding: '0.2cm',
                        width: '4cm',
                        marginTop: '0cm',
                        // color: 'black',
                        height: 'auto',
                        width:'6cm',
                        border:'0px',
                      
                      }}
                    />
                    
                   
                  </div>

                  {/* Modal component */}
                

                  <section id="team" className="team" style={{ marginTop: '-2cm' }}>
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="" data-aos="fade-up" data-aos-delay="100">
        <div className="row member">

          <div className="col-xl-12 col-md-12" style={{ padding: '0.4cm' }}>
            <h4 style={{ textAlign: 'justify',paddingBottom:'0.5cm',color:'gray' }}>LIST OF OUR RESTAURENT ADMINS</h4>

            {Array.isArray(restaurantsAdmin) && restaurantsAdmin.length > 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr style={{ backgroundColor: 'red', marginTop: '0cm' }}>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">modify</th>
                  </tr>
                </thead>
                <tbody>
                  {restaurantsAdmin.map((user, index) => (
                    <tr key={user.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{user.firstname} {user.lastname}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.status}</td>
                      <td>
                        <button onClick={() => handleView(user.id)} style={{ backgroundColor: 'white', border: '0px' }}>
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button onClick={() => handleModify(user.id)} style={{ backgroundColor: 'white', border: '0px' }}>
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        {renderActivationButton(user.id, user.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
                <p>No data available</p>
              </div>
            )}
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
      <ToastContainer />
    </body>
  );
};

export default Dashboard;
