import React from 'react';
import '../../css/main2.css';
const LandingPage = () => {
  return (
    <>

      <section id="hero" className="hero" style={{ marginTop: '3cm' }}>
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-2 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            </div>
            <div className="col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">

              <form action="forms/contact.php" method="post" role="form" className="myform">
                <h4 style={{ fontFamily: 'Abel', backgroundColor: '', border: '0px', height: 'auto', borderTopLeftRadius: '0.5cm', borderTopRightRadius: '0.5cm', color: 'black', textAlign: '', padding: '' }}>Login form</h4>

                <div className="form-group mt-3">
                  <span>Email</span>

                  <input style={{ marginTop: '0.3cm', backgroundColor: 'whitesmoke', border: '0px', height: '1.2cm' }} type="text" className="form-control" name="email" id="email" placeholder="cedrick@gmail.com" required />
                </div>
                {/* <br/> */}

                <div className="form-group mt-3">
                  <span style={{ margin: '0cm' }}>password</span>
                  <input style={{ marginTop: '0.3cm', backgroundColor: 'whitesmoke', border: '0px', height: '1.2cm' }} type="password" oninput="maskPassword()" className="form-control" name="password" id="subject" placeholder="************" required />
                </div>


                <div className="text-center"><button type="submit" className="form-control" style={{ marginTop: '1.6cm', backgroundColor: '#4c56ad', color: 'white', borderRadius: ' 10px' }}>login</button></div>
              </form>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '', border: '0px' }}>
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

    </>
  );
};

export default LandingPage;
