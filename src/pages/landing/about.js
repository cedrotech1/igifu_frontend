import React from 'react';
import Menu from "../../components/menu";
import Footer from "../../components/footer";
const LandingPage = () => {
  return (
    <>



<Menu/>

        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2 style={{fontSize:'45px',marginBottom:'1cm',marginTop:'-1cm',fontFamily:'monospace'}}>
                  Welcome to meal card
                </h2>
                <p style={{marginBottom:'1cm',marginTop:'0cm',fontStyle:'bold',fontFamily:'monospace'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="register" className="btn-get-started" style={{backgroundColor:'skyblue',borderRadius:'6px',fontFamily:'monospace'}}>
                    Get Started
                  </a>
                  <a
                    href="restoAdmin"
                    className="glightbox btn-watch-video d-flex align-items-center"
                    style={{backgroundColor:'whitesmoke',borderRadius:'6px',width:'4.5cm',textAlign:'center',fontFamily:'monospace'}}
                  >
                  &nbsp;  &nbsp; 
                     restaurent
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'justify'}}>kiza RESTO</h4>
                 
                  <p style={{textAlign:'justify'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="member">
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'justify',textTransform:'uppercase'}}>umucyo RESTO</h4>
                 
                  <p style={{textAlign:'justify'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'justify',textTransform:'uppercase'}}>obina RESTO</h4>
                 
                  <p style={{textAlign:'justify'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                  </p>
                </div>
              </div>
         
            </div>
          </div>
        </section>


        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="" data-aos="fade-up" data-aos-delay="100">
                <div className="row memberx">
                <div className=" col-xl-6 col-md-6 d-flex">
                    <img  src="assets/img/hero-img.svg" className="img-fluid" alt="" />

                    </div>
                    <div className=" col-xl-6 col-md-6" style={{padding:'0.5cm'}}>
                    <h3 style={{textAlign:'justify'}}>Vip category</h3>
                  
                   

                   
                    <p style={{textAlign:'justify',marginTop:'1cm'}}>
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
              
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox btn-watch-video d-flex align-items-center"
                    style={{backgroundColor:'whitesmoke',borderRadius:'6px',width:'4cm',textAlign:'center',padding:'0.2cm',marginTop:'0.5cm'}}
                  >
                  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                     restaurent
                  </a>
                </div>
                    </div>
                     </div>

                 
              </div>
          
       
          
            </div>
          </div>
        </section>
        {/* box-shadow: 5px 2px 25px rgba(0, 0, 0, 0.1); */}
        <section id="team" className="team" style={{backgroundColor:'rgb(254, 254, 254)'}}>
          <div className="container" data-aos="fade-up">
            <div className="row gy-4" style={{paddingLeft:'1cm'}}>
                  <div className="col-xl-1  d-flex" data-aos="fade-up" data-aos-delay="100">
           
              </div>
         
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="memberx" style={{backgroundColor:'rgb(254, 254, 254)'}}>
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'center'}}>Create Account </h4>
                 
                  <p style={{textAlign:'center'}}>
                  Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. 
                  </p>
                </div>
              </div>
             
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="memberx" style={{backgroundColor:'rgb(254, 254, 254)'}}>
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'center'}}>Get authontication </h4>
                 
                 <p style={{textAlign:'center'}}>
                 Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. 
                 </p>
                </div>
              </div>

    
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="memberx" style={{backgroundColor:'rgb(254, 254, 254)'}}>
                  <img src="assets/img/features.png" className="img-fluid" alt="" />
                  <h4 style={{textAlign:'center'}}>enjoy app </h4>
                 
                 <p style={{textAlign:'center'}}>
                 Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. 
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
