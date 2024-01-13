import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../css/main2.css';
import Menu from '../../components/menu';
import Footer from '../../components/footer';

const LandingPage = () => {


  return (
    <>
      <Menu />

   

      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2 style={{ fontSize: '45px', marginBottom: '1cm', marginTop: '-1cm', fontFamily: 'monospace' }}>
                Welcome to meal card
              </h2>
              <p style={{ marginBottom: '1cm', marginTop: '0cm', fontStyle: 'bold', fontFamily: 'monospace' }}>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a
                  href="register"
                  className="btn-get-started"
                  style={{ backgroundColor: 'skyblue', borderRadius: '6px', fontFamily: 'monospace' }}
                >
                  Get Started
                </a>
                <a
                  href="restoAdmin"
                  className="glightbox btn-watch-video d-flex align-items-center"
                  style={{
                    backgroundColor: 'whitesmoke',
                    borderRadius: '6px',
                    width: '4.5cm',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                  }}
                >
                  &nbsp; &nbsp; restaurent
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/js/main.js"></script>
    </>
  );
};

export default LandingPage;
