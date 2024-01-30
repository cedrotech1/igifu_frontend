
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Offcanvas, Button, Nav } from 'react-bootstrap';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'; // Importing icons from the 'react-icons' library
import '../../css/main2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Menu from "../../components/restoAdminMenu";

import Statistics from "../../components/statistics-component";
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


  const [EmployeesAdmin, setEmployeesAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  // const [value, setFilterValue] = useState('');

  useEffect(() => {
    const fetchEmployeesAdmin = async () => {
      try {

        const response = await fetch('http://localhost:5000/api/v1/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        // const [EmployeesAdmin, setEmployeesAdmin] = useState([]);
        if (data.success) {
          // Ensure that 'users' is an array before filtering
          const usersArray = Array.isArray(data.users) ? data.users : [];
          const filteredUsers = usersArray.filter(user => (user.role === 'employee' || user.role !== 'EmployeeAdmin'));



          setEmployeesAdmin(filteredUsers);

          console.log(filteredUsers);
        } else {
          console.error('Failed to fetch EmployeesAdmin:', data.message);
        }

        // Set loading to false after fetching data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching EmployeesAdmin:', error);
        // Set loading to false in case of an error
        setLoading(false);
      }
    };

    fetchEmployeesAdmin();
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
        await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay time as needed

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
        await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay time as needed

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

  {
    Array.isArray(EmployeesAdmin) && EmployeesAdmin.length > 0 ? (
      EmployeesAdmin.map((user, index) => (
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
    )
  }
  // ...




  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/users/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          role: 'employee',
          status: 'active',
        }),
      });

      if (response.ok) {
        const res = await response.json();
        toast.success(res.message);
        window.location.reload();
        // navigate('./login');
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error('Error creating account', error);
      setError('Failed to create account. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    setError(null);
  };

  // handlefilter

  const [value, setFilterValue] = useState('');
  // const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
    setError(null);
  };

  useEffect(() => {
    const fetchEmployeesAdmin = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          // Ensure that 'users' is an array before filtering
          const usersArray = Array.isArray(data.users) ? data.users : [];

          // Filter users based on 'firstname', 'lastname', 'email', or 'phone'
          const filteredUsers = usersArray.filter(user =>
            (user.firstname.toLowerCase().includes(value.toLowerCase()) ||
              user.lastname.toLowerCase().includes(value.toLowerCase()) ||
              user.email.toLowerCase().includes(value.toLowerCase()) ||
              user.phone.toLowerCase().includes(value.toLowerCase())) &&
            user.role !== 'EmployeeAdmin'
          );



          setEmployeesAdmin(filteredUsers);
        } else {
          console.error('Failed to fetch EmployeesAdmin:', data.message);
        }

        // Set loading to false after fetching data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching EmployeesAdmin:', error);
        // Set loading to false in case of an error
        setLoading(false);
      }
    };

    fetchEmployeesAdmin();
  }, [value]);

  // Use 'filteredUsers' in your component where needed


  return (
    <body className='mybody'>
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

                  <section id="team" className="team teamb" >
                    <div className="container" data-aos="fade-up" style={{marginLeft:'-0.2cm'}}>
                      <div className="row">

                        {/* menu bars */}
                        <div className="col-12 d-md-none">
                          <Button variant="" onClick={() => setShow(!show)}>
                            ☰
                          </Button>
                        </div>


                        <Statistics />


                      </div>
                    </div>
                  </section>

                  <div className="row" style={{ backgroundColor: 'whitesmoke' }}>


                    <div className="col-xl-4 col-md-4" style={{ padding: '0.4cm' }}>

                      <input
                        placeholder='Filter here...'
                        variant=""
                        onChange={handleFilter}
                        style={{
                          backgroundColor: 'white',
                          borderRadius: '6px',
                          fontFamily: 'monospace',
                          textDecoration: 'none',
                          padding: '0.2cm',
                          width: '4cm',
                          marginTop: '0cm',
                          marginBottom: '1cm',
                          // color: 'black',
                          height: 'auto',
                          width: '6cm',
                          border: '0px',

                        }}
                      />



                    </div>
                    <div className="col-xl-4 col-md-4" style={{ padding: '0.4cm' }}>
                      <h4 style={{ textAlign: 'justify', paddingBottom: '0.5cm', color: 'gray', padding: '0.3cm' }}>LIST OF OUR EMPLOYEES </h4>

                    </div>
                    <div className="col-xl-4 col-md-4" style={{ padding: '0.4cm' }}>
                      <div style={{ textAlign: 'right', marginBottom: '0.4cm' }}>
                        <Button
                          variant=""
                          onClick={handleToggleModal}
                          style={{
                            backgroundColor: 'white',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            textDecoration: 'none',
                            padding: '0.2cm',
                            width: '4cm',
                            // marginTop: '-2cm',
                            color: 'black',
                            height: 'auto',
                          }}
                        >
                          Add Employees
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Modal component */}
                  {/* Modal component */}
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Employees</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit} className="myform">
                        <div className="row" style={{ paddingTop: '0cm' }}>
                          <div className="col-md-6 form-group">
                            <span>First name</span>
                            <input type="text" name="firstname" className="form-control" id="firstname" placeholder="Cedrick" onChange={handleChange} />
                          </div>
                          <div className="col-md-6 form-group mt-3 mt-md-0">
                            <span>Last Name</span>
                            <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Hakuzimana" onChange={handleChange} />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <span>Email</span>
                          <input type="text" className="form-control" name="email" id="email" placeholder="cedrick@gmail.com" onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                          <span>Phone</span>
                          <input type="text" className="form-control" name="phone" id="phone" placeholder="0784366616" onChange={handleChange} />
                        </div>

                        {/* <div className="form-group mt-3">
                          <span>password</span>
                          <input type="text" className="form-control" name="password" id="password" placeholder="*********" onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                          <span>confirm password</span>
                          <input type="text" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="*********" onChange={handleChange} />
                        </div> */}


                        <div className="row" style={{ paddingTop: '0.3cm' }}>
                          <div className="col-md-6 form-group">
                            <span>Gender</span>
                            <input type="text" name="gender" className="form-control" id="gender" placeholder="male" onChange={handleChange} />
                          </div>
                          <div className="col-md-6 form-group mt-3 mt-md-0">
                            <span>Address</span>
                            <input type="text" className="form-control" name="address" id="address" placeholder="huye/ngoma" onChange={handleChange} />
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="form-control">
                            Create Account
                          </button>
                        </div>
                        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                      </form>
                    </Modal.Body>

                  </Modal>

                  {/* <section id="team" className="team" style={{ marginTop: '-2cm' }}>
                    <div className="container" data-aos="fade-up">
                      <div className="row">
                        <div className="" data-aos="fade-up" data-aos-delay="100">
                          <div className="row member">

                            <div className="col-xl-12 col-md-12" style={{ padding: '0.4cm' }}>

                              <h4 style={{ textAlign: 'justify', paddingBottom: '0.5cm', color: 'gray' }}>LIST OF OUR EMPLOYEES </h4>


                              {Array.isArray(EmployeesAdmin) && EmployeesAdmin.length > 0 ? (
                                <table className="table table-hover">
                                  <thead>
                                    <tr style={{ Color: 'red', marginTop: '0cm' }}>
                                      <th scope="col">#</th>
                                      <th scope="col">names</th>
                                   
                                      <th scope="col">Email</th>
                                      <th scope="col">Phone</th>
                                      <th scope="col">status</th>
                                      <th scope="col">modify</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {EmployeesAdmin.map((user, index) => (
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
                  </section> */}

                  <section id="team" className="team">
                    <div className="container" data-aos="fade-up">
                      {/* <h4 style={{ textAlign: 'justify', paddingBottom: '0.5cm', color: 'gray',padding:'0.3cm' }}>LIST OF OUR EMPLOYEES </h4> */}

                      <div className="row gy-4">
                        {
                           EmployeesAdmin.length > 0 ? (


                          EmployeesAdmin.map((Employee) => (
                            <div onClick={() => handleView(Employee.id)} key={Employee.id} className="col-xl-3 col-md-6 " data-aos="fade-up" data-aos-delay={100 * Employee.id} style={{ padding: '' }}>
                              <div className="member col-xl-12">
                                <img src='assets/img/images (3).jpeg' className="img-fluid" alt="" style={{ height: 'auto', padding: '0px', width: '100%', borderRadius: '7px' }} />
                                <h4 style={{ textAlign: 'center' }}>{Employee.firstname} &nbsp;{Employee.lastname}</h4>

                                <p style={{ textAlign: 'justify', fontFamily: 'cursive', textAlign: 'center' }}>
                                  {Employee.status}
                                </p>

                                {/* {Employee.role} */}
                                <p style={{ textAlign: 'center', fontStyle: 'italic', fontPalette: '13px', backgroundColor: 'whitesmoke', padding: '0.4cm', marginTop: '20px', borderRadius: '6px' }}>
                                  <BiMap className="" style={{ color: 'black' }} />&nbsp;&nbsp;{Employee.address} <br />
                                  <BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} />&nbsp;&nbsp;{Employee.email} <br />
                                  <BiPhone />&nbsp;&nbsp;{Employee.phone}
                                </p>

                                <button onClick={() => handleView(Employee.id)} style={{ backgroundColor: 'white', border: '0px' }}>
                                  <FontAwesomeIcon icon={faEye} />
                                </button>
                                <button onClick={() => handleModify(Employee.id)} style={{ backgroundColor: 'white', border: '0px' }}>
                                  <FontAwesomeIcon icon={faEdit} style={{ Color: 'gray' }} />
                                </button>
                                {renderActivationButton(Employee.id, Employee.status)}

                              </div>
                            </div>
                          ))
                          ) : (
                            <div className="col-12 text-center">
                              <h4 style={{ textAlign: 'center', paddingBottom: '0.5cm', color: 'gray',border:'4PX SOLID lightgray',padding:'1cm' }}>{value ? 'NO MATCHING DATA FOUND' : 'NO DATA AVAILABLE'}</h4>
                            </div>
                          )}
                        
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
