import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../css/main2.css';

const LandingPage = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,

        }),
      });

      if (response.ok) {
        const res = await response.json();
        toast.success(res.message);

        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
       
        const role = res.user.role;
        await new Promise(resolve => setTimeout(resolve, 3000)); // Adjust the delay time as needed

        if (role === 'customer') {
          await navigate('../list');
        } else if (role === 'superadmin') {
          await navigate('../admin_dash');
        } else if (role === 'restaurentadmin') {
          await navigate('../resto_dash');
        } else if (role === 'employee') {
          await navigate('../emplyoyee_customers');
        }
        
      
      

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

      <section id="herofm" className="herofm" style={{ marginTop: '3cm' }}>
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-1 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            </div>
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">

              <form onSubmit={handleSubmit} className="myform">
                <h4 >Login form</h4>

                <div className="form-group mt-3">
                  <span>Email</span>

                  <input type="text" className="form-control" name="email" id="email" placeholder="cedrick@gmail.com" onChange={handleChange} />
                </div>
                {/* <br/> */}

                <div className="form-group mt-3">
                  <span style={{ margin: '0cm' }}>password</span>
                  <input type="password" oninput="maskPassword()" className="form-control" name="password" id="subject" placeholder="************" onChange={handleChange} />
                </div>


                <div className="text-center"><button type="submit" className="form-control" >login</button></div>
              </form>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 d-flex align-items-center justify-content-center">
              <img src="assets/img/Secure login-bro.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>

          </div>
        </div>
      </section>

      <br />





      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/js/main.js"></script>
      <ToastContainer />

    </>
  );
};

export default LandingPage;
