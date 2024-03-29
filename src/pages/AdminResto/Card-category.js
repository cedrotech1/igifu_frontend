
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Offcanvas, Button, Nav } from 'react-bootstrap';
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


  const [Cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  // const [value, setFilterValue] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
      
        const response = await fetch('http://localhost:5000/api/v1/categories/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        // const [Cards, setCards] = useState([]);
        if (data.success) {


          setCards(data.data);

          console.log(data.data);
        } else {
          console.error('Failed to fetch Cards:', data.message);
        }

        // Set loading to false after fetching data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Cards:', error);
        // Set loading to false in case of an error
        setLoading(false);
      }
    };

    fetchCards();
  }, []);


  const handleView = (CardId) => {
    // Handle view logic
    console.log(`View Card with ID: ${CardId}`);
  };

  const handleModify = (CardId) => {
    // Handle modify logic
    console.log(`Modify Card with ID: ${CardId}`);
  };
  const handleDeactivate = async (CardId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/v1/categories/diactivate/${CardId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const res = await response.json();
        toast.success(res.message);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Adjust the delay time as needed

        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error(`Failed to activate Card with ID ${CardId}:`, errorData.message);
      }
    } catch (error) {
      console.error('Error activating Card:', error);
    }
  };

  const handleActivate = async (CardId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/v1/categories/activate/${CardId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const res = await response.json();
        toast.success(res.message);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Adjust the delay time as needed

        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error(`Failed to activate Card with ID ${CardId}:`, errorData.message);
      }
    } catch (error) {
      console.error('Error activating Card:', error);
    }
  };

  // ...

  const renderActivationButton = (CardId, CardStatus) => {
    const buttonStyle = {
      backgroundColor: 'white',
      border: '0px',
    };

    if (CardStatus === 'active') {
      return (
        <button onClick={() => handleDeactivate(CardId)} style={buttonStyle}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      );
    } else if (CardStatus === 'inactive') {
      return (
        <button onClick={() => handleActivate(CardId)} style={buttonStyle}>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      );
    } else {
      return null;
    }
  };

  // ...

  {
    Array.isArray(Cards) && Cards.length > 0 ? (
      Cards.map((Card, index) => (
        <tr key={Card.id}>
          <th scope="row">{index + 1}</th>
          <td>{Card.firstname} {Card.lastname}</td>
          <td>{Card.email}</td>
          <td>{Card.phone}</td>
          <td>{Card.status}</td>
          <td>
            <button onClick={() => handleView(Card.id)} style={{ backgroundColor: 'white', border: '0px' }}>
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button onClick={() => handleModify(Card.id)} style={{ backgroundColor: 'white', border: '0px' }}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            {renderActivationButton(Card.id, Card.status)}
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
    name: '',
    price: '',
    description: '',

  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/categories/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          // role: 'employee',
          // status: 'active',
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
    // Clear error when Card starts typing
    setError(null);
  };

  // handlefilter

  const [value, setFilterValue] = useState('');
  // const [filteredCards, setFilteredCards] = useState([]);
  
  const handleFilter = (e) => {
    setFilterValue(e.target.value);
    setError(null);
  };
  
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/categories/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const data = await response.json();
  
        if (data.success) {
          // Ensure that 'Cards' is an array before filtering
          const CardsArray = Array.isArray(data.data) ? data.data : [];
  
          const filteredCards = CardsArray.filter(Card =>
            (Card.price.toLowerCase().includes(value.toLowerCase()) ||
            Card.name.toLowerCase().includes(value.toLowerCase()) ||
            Card.status.toLowerCase().includes(value.toLowerCase())) 
          );
  
          setCards(filteredCards);
        } else {
          console.error('Failed to fetch Cards:', data.message);
        }
  
        // Set loading to false after fetching data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Cards:', error);
        // Set loading to false in case of an error
        setLoading(false);
      }
    };
  
    fetchCards();
  }, [value]);
  
  
  // Use 'filteredCards' in your component where needed
  

  return (
    <body className='mybody' >
      <div className="dashboard" style={{backgroundColor:'whitesmoke'}}>
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
                    <div className="container" data-aos="fade-up" style={{marginLeft:'-0.2cm'}}>
                      <div className="row">

                        {/* menu bars */}
                        <div className="col-12 d-md-none">
                          <Button variant="" onClick={() => setShow(!show)}>
                            ☰
                          </Button>
                        </div>


             <Statistics/>


                      </div>
                    </div>
                  </section>

                  <div className="row" style={{backgroundColor:'whitesmoke'}}>


                    <div className="col-xl-3 col-md-3" style={{ padding: '0.4cm' }}>

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
                    <div className="col-xl-5 col-md-5" style={{ padding: '0.4cm' }}>
                    <h4 style={{ textAlign: 'center', paddingBottom: '0.5cm', color: 'gray' }}>LIST OF CARD CATEGORIES </h4>

                    </div>
                    <div className="col-xl-4 col-md-4" style={{ padding: '0.4cm' }}>
                      <div style={{ textAlign: 'right',marginBottom:'0.4cm' }}>
                        <Button
                          variant=""
                          onClick={handleToggleModal}
                          style={{
                            backgroundColor: 'white',
                            borderRadius: '6px',
                            fontFamily: 'monospace',
                            textDecoration: 'none',
                            padding: '0.2cm',
                            width: '5cm',
                            // marginTop: '-2cm',
                            color: 'black',
                            height: 'auto',
                          }}
                        >
                          Add Card Category 
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Modal component */}
                  {/* Modal component */}
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Card Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={handleSubmit} className="myform">
                        <div className="row" style={{ paddingTop: '0cm' }}>
                          <div className="col-md-6 form-group">
                            <span>category name</span>
                            <input type="text" name="name" className="form-control" id="firstname" placeholder="Vip" onChange={handleChange} />
                          </div>
                          <div className="col-md-6 form-group mt-3 mt-md-0">
                            <span>price</span>
                            <input type="text" className="form-control" name="price" id="lastname" placeholder="Ex:50000" onChange={handleChange} />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <span>description</span>
                          <textarea type="text" className="form-control" name="description" id="email" style={{backgroundColor:'whitesmoke'}} placeholder="............." onChange={handleChange} />
                        </div>
                     

                        {/* <div className="form-group mt-3">
                          <span>password</span>
                          <input type="text" className="form-control" name="password" id="password" placeholder="*********" onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                          <span>confirm password</span>
                          <input type="text" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="*********" onChange={handleChange} />
                        </div> */}


                       
                     
                        <div className="text-center">
                          <button type="submit" className="form-control">
                            Create Account
                          </button>
                        </div>
                        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                      </form>
                    </Modal.Body>

                  </Modal>

                  <section id="team" className="team" style={{ backgroundColor: 'whitesmoke' }}>
  <div className="container" data-aos="fade-up">
    <div className="row gy-4">
      {Cards.length > 0 ? (
        Cards.map((category, index) => (
          <div onClick={() => handleView(category.id)} key={index} className="col-xl-3 col-md-4" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
            <div className="member">
              <img src='/assets/img/images (4).jpeg' className="img-fluid" alt="" style={{ height: 'auto', width: '100%', borderRadius: '7px' }} />
              <h4 style={{ textAlign: 'center', fontFamily: 'cursive', textTransform: 'uppercase' }}>{category.name}</h4>
              <p style={{ textAlign: 'center', fontFamily: 'cursive', marginLeft: '0cm' }}>{category.description}</p>
              <p style={{ fontFamily: 'cursive', marginTop: '-0.5cm', textAlign: 'center', fontSize: '20px' }}>
                Price: {category.price}
              </p>
              <p style={{ fontFamily: 'cursive', marginTop: '-0.6cm', textAlign: 'center', fontSize: '16px' }}>
                <i> status: {category.status}</i>
              </p>
              <button onClick={() => handleView(category.id)} style={{ backgroundColor: 'white', border: '0px' }}>
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button onClick={() => handleModify(category.id)} style={{ backgroundColor: 'white', border: '0px' }}>
                <FontAwesomeIcon icon={faEdit} style={{ Color: 'gray' }} />
              </button>
              {renderActivationButton(category.id, category.status)}
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
