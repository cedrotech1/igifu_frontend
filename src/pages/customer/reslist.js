import React from 'react';
import '../../css/main2.css';
import Menu from "../../components/customerM";
import Footer from "../../components/footer";
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'; // Importing icons from the 'react-icons' library
const LandingPage = () => {
  return (
    <>


      <Menu />
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h5 style={{ fontSize: '35px', marginBottom: '1cm', marginTop: '1cm', fontStyle: 'bold', fontFamily: 'monospace' }}>
                <b>List of all restaurent</b>
              </h5>
              <p style={{ fontFamily: 'monospace' }}>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              {/* Uncomment and add the appropriate path for your image
                <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                */}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <img src="assets/img/images (3).jpeg" className="img-fluid" alt="" style={{height:'auto',width:'100%',borderRadius:'7px'}}/>
                <h4 style={{ textAlign: 'justify' }}>kiza RESTO</h4>

                <p style={{ textAlign: 'justify' }}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  <p style={{ textAlign: 'center', fontStyle: 'italic', fontPalette: '13px', backgroundColor: 'whitesmoke', padding: '0.4cm' }}>


                    <BiMap className="" style={{ color: 'black' }} />

                    &nbsp;&nbsp;  huye innovation hub ! training center! <br />


                    <BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} />&nbsp;&nbsp;
                    cedrickhakuzimana@gmail.com  <br />
                    <BiPhone />

                    &nbsp;&nbsp; 07853435654
                  </p>

                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="member">
                <img src="assets/img/images.jpeg" className="img-fluid" alt="" style={{height:'auto',width:'100%',borderRadius:'7px'}}/>
                <h4 style={{ textAlign: 'justify', textTransform: 'uppercase' }}>umucyo RESTO</h4>

                <p style={{ textAlign: 'justify' }}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.

                  <p style={{ textAlign: 'center', fontStyle: 'italic', fontPalette: '13px', backgroundColor: 'whitesmoke', padding: '0.3cm' }}>


                    <br />
                    <BiMap className="" style={{ color: 'black' }} />

                    &nbsp;&nbsp;  huye innovation hub ! training center! <br />


                    <BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} />&nbsp;&nbsp;
                    cedrickhakuzimana@gmail.com  <br />
                    <BiPhone />

                    &nbsp;&nbsp; 07853435654
                  </p>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                <img src="assets/img/images (1).jpeg" className="img-fluid" alt="" style={{height:'auto',width:'100%',borderRadius:'7px'}}/>
                <h4 style={{ textAlign: 'justify', textTransform: 'uppercase' }}>obina RESTO</h4>

                <p style={{ textAlign: 'justify' }}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.

                  <p style={{ textAlign: 'center', fontStyle: 'italic', fontPalette: '13px', backgroundColor: 'whitesmoke', padding: '0.4cm' }}>


                    <br />
                    <BiMap className="" style={{ color: 'black' }} />

                    &nbsp;&nbsp;  huye innovation hub ! training center! <br />


                    <BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} />&nbsp;&nbsp;
                    cedrickhakuzimana@gmail.com  <br />
                    <BiPhone />

                    &nbsp;&nbsp; 07853435654
                  </p>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
      {/* footer */}



      <script src="assets/js/main.js"></script>

    </>
  );
};

export default LandingPage;
