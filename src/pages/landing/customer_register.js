import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../css/main2.css';
import Footer from '../../components/footer';
import Menu from '../../components/menu';
import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';

const LandingPage = () => {
  const navigate = useNavigate(); 


  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    password:'',
    confirmPassword:''
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role: 'customer',
          status: 'active',
        }),
      });

      if (response.ok) {
        const res = await response.json();
        toast.success(res.message);
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

  return (
    <>
      <Menu />

      <section id="hero" className="hero" style={{ marginTop: '-0.4cm' }}>
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-1 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start"></div>

            <div
              className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start"
              style={{ boxShadow: '', padding: '0.3cm' }}
            >
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
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="0784366616" onChange={handleChange}  />
                </div>

                <div className="form-group mt-3">
                  <span>password</span>
                  <input type="text" className="form-control" name="password" id="password" placeholder="*********" onChange={handleChange} />
                </div>
                <div className="form-group mt-3">
                  <span>confirm password</span>
                  <input type="text" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="*********" onChange={handleChange}  />
                </div>


                <div className="row" style={{ paddingTop: '0.3cm' }}>
                  <div className="col-md-6 form-group">
                    <span>Gender</span>
                    <input type="text" name="gender" className="form-control" id="gender" placeholder="male" onChange={handleChange}  />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <span>Address</span>
                    <input type="text" className="form-control" name="address" id="address" placeholder="huye/ngoma" onChange={handleChange}  />
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="form-control">
                    Create Account
                  </button>
                </div>
                {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
              </form>
            </div>

            <div className="col-lg-5 order-1 order-lg-2 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/Interaction Design-bro.svg"
                className="img-fluid"
                alt=""
                data-aos="zoom-out"
                data-aos-delay="100"
                style={{ height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <br />
      <Footer />
      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <script src="assets/js/main.js"></script>
      <ToastContainer />

    </>
  );
};

export default LandingPage;
