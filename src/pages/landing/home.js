import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/main2.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

const LandingPage = () => {


  return (
    <>
      <Menu />



      <section id="hero" className="hero herohome" style={{ height: '' }}>
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start" style={{ marginTop: '-2cm', fontFamily: 'monospace' }}>
              <h2 className='welcame' style={{ fontSize: '45px', marginBottom: '0cm', marginTop: '', fontFamily: 'monospace' }}>
                Welcome to meal card
              </h2>
              <p style={{ marginBottom: '1cm', marginTop: '0cm', fontStyle: 'bold', fontFamily: 'monospace',textAlign:'justfy' }}>
              Welcome to our innovative dining experience! Securely enjoy meals with your personalized card. Our automated system ensures convenience and effortless reporting. Bon appétit!
              </p>


              <div className="d-flex justify-content-center justify-content-lg-start" style={{ marginTop: '1cm' }}>
                <a href="register" className="btn-get-started" style={{ backgroundColor: '', borderRadius: '6px', fontFamily: 'monospace' }}>
                  Get Started
                </a>

                <a href="restoAdmin" className="restaurent" style={{}}>
                  Restaurent
                </a>
              </div>



            </div>
            <div className="col-lg-6 order-1 order-lg-2" style={{ marginTop: '-1cm', fontFamily: 'monospace',color:'white' }}>
              <img src="assets/img/breakfast from bed-pana.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>
          </div>
        </div>
      </section>
      <br />
      <div  style={{ marginTop: '-0cm', fontFamily: 'monospace' }}>
        <Footer />
      </div>

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/js/main.js"></script>
    </>
  );
};

export default LandingPage;
