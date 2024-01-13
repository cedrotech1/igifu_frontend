import React from 'react';
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import { BiEnvelope,BiPhone,BiMap} from 'react-icons/bi'; // Importing icons from the 'react-icons' library

const LandingPage = () => {
  return (
    <>
    <Menu/>



        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h5 style={{fontSize:'35px',marginBottom:'0.5cm',marginTop:'0cm',fontStyle:'bold',fontFamily:'monospace'}}>
                <b>Kiza restaurent</b>  
                </h5>
                <p style={{marginBottom:'0.5cm',marginTop:'0cm',fontStyle:'bold',fontFamily:'monospace'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                </p>

                <p style={{marginBottom:'0.5cm',marginTop:'0cm',fontStyle:'bold',fontFamily:'monospace',marginTop:'1cm'}}>
                  
                      <i className="bi bi-envelope flex-shrink-0" style={{ backgroundColor: 'white' }}><BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} /></i>
                      &nbsp; <span>  cedrickhakuzimana@gmail.com</span><br/>
                    <i className="bi bi-envelope flex-shrink-0" style={{ backgroundColor: 'white' }}><BiPhone className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} /></i>
                    
                    &nbsp; <span> 07853435654</span><br/>

                    <i className="bi bi-envelope flex-shrink-0" style={{ backgroundColor: 'white' }}><BiMap className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} /></i>
                    
                      &nbsp; <span>huye innovation hub ! training center!
                        </span>
                  
                   
                </p>
               

                
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/features-2.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
               
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div>
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h6 style={{fontSize:'28px',marginBottom:'0.5cm',marginTop:'0cm',fontStyle:'bold',fontFamily:'monospace'}}>
                <i>Meal card categories</i>  
                </h6>
                <p style={{fontFamily:'monospace',marginLeft:'0cm'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                </p>

                

            
              </div>
            </div>
            <div className="row gy-4">
              
              <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'justify',fontFamily:'monospace',textTransform:'uppercase'}}>Vip card</h4>
                 
                  <p style={{textAlign:'justify',fontFamily:'monospace',marginLeft:'0cm'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  </p>

                  <p style={{fontFamily:'monospace',marginTop:'-0.5cm',textAlign:'justify',fontSize:'20px'}}>
                  Price:20000 Rwf/ mounth
                </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="member">
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'justify',fontFamily:'monospace',textTransform:'uppercase'}}>regular card</h4>
                 
                  <p style={{textAlign:'justify',fontFamily:'monospace',marginLeft:'0cm'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  </p>

                  <p style={{fontFamily:'monospace',marginTop:'-0.5cm',textAlign:'justify',fontSize:'20px'}}>
                  Price:80000 Rwf/ mounth
                </p>
              
                </div>
              </div>
              <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'justify',fontFamily:'monospace',textTransform:'uppercase'}}>vvip card</h4>
                 
                  <p style={{textAlign:'justify',fontFamily:'monospace',marginLeft:'0cm'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  </p>

                  <p style={{fontFamily:'monospace',marginTop:'-0.5cm',textAlign:'justify',fontSize:'20px'}}>
                  Price:9000 Rwf/ mounth
                </p>
                </div>
              </div>
         
            </div>
          </div>

        </section>
        {/* footer */}
        <Footer/>
        {/* footer */}

        <script src="assets/js/main.js"></script>
     
    </>
  );
};

export default LandingPage;
