import React from 'react';
import  '../../css/main2.css';
import Footer from "../../components/footer";

import Menu from "../../components/menu";

const LandingPage = () => {
  return (
    <>


<Menu/>

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="" data-aos="fade-up" data-aos-delay="100">
                <div className="row member">
                <div className=" col-xl-6 col-md-6 d-flex">
                    <img  src="assets/img/hero-img.svg" className="img-fluid" alt="" />

                    </div>
                    <div className=" col-xl-6 col-md-6" style={{padding:'0.4cm'}}>
                    <h3 style={{textAlign:'justify'}}>Vip category</h3>
                  
                   

                   
                    <p style={{textAlign:'justify',marginTop:'1cm'}}>
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
                    </p>

                    <p style={{fontFamily:'monospace',marginTop:'-0.5cm',textAlign:'right',fontSize:'20px'}}>
                  Price:9000 Rwf/ mounth
                </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
              
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox btn-watch-video d-flex align-items-center"
                    style={{backgroundColor:'whitesmoke',borderRadius:'6px',width:'4cm',textAlign:'center',padding:'0.2cm',marginTop:'0.5cm',textDecoration:'none'}}
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

        {/* footer */}
        <Footer/>
        {/* footer */}

       

        <script src="assets/js/main.js"></script>
    
    </>
  );
};

export default LandingPage;
