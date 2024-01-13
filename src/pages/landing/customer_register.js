import React from 'react';
import  '../../css/main2.css';
import Footer from "../../components/footer";

import Menu from "../../components/menu";
const LandingPage = () => {
  return (
    <>
      <Menu/>
     
        <section id="hero" className="hero" style={{marginTop:'-0.4cm'}}>
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-1 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                </div>
                {/* 0px 2px 7px rgba(0, 0, 0, 0.1)    0px 2px 7px 0px rgba(0, 0, 0, 0.1) */}
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start" style={{ boxShadow: '', padding: '0.3cm' }}>
              
              <form action="forms/contact.php" method="post" role="form" className="myform">
            {/* <h4 style={{fontFamily:'Abel',backgroundColor:'',border:'0px',height:'auto',borderTopLeftRadius:'0.5cm',borderTopRightRadius:'0.5cm',color:'black',textAlign:'',padding:''}}>register as customer form</h4> */}
             

            <div className="row"style={{paddingTop:'0cm'}}>
                <div className="col-md-6 form-group">
                <span>First name</span>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Cedrick" required style={{marginTop:'0.1cm',backgroundColor:'whitesmoke',border:'0px',height:'1.2cm'}}/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                <span>Last Name</span>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Hakuzimana" required  style={{marginTop:'0.1cm',backgroundColor:'whitesmoke',border:'0px',height:'1.2cm'}}/>
                </div>
              </div>
                <div className="form-group mt-3">
                  <span>Email</span>
               
                  <input style={{marginTop:'0.3cm',backgroundColor:'whitesmoke',border:'0px',height:'1.2cm'}} type="text" className="form-control" name="email" id="email" placeholder="cedrick@gmail.com" required />
                </div>

                <div className="form-group mt-3">
                  <span>Phone</span>
               
                  <input style={{marginTop:'0.3cm',backgroundColor:'whitesmoke',border:'0px',height:'1.2cm'}} type="text" className="form-control" name="email" id="email" placeholder="0784366616" required />
                </div>

                <div className="form-group mt-3">
                  <span>Password</span>
               
                  <input style={{marginTop:'0.3cm',backgroundColor:'whitesmoke',border:'0px',height:'1.2cm'}} type="text" className="form-control" name="email" id="email" placeholder="*************" required />
                </div>
                {/* <br/> */}

                <div className="row"style={{paddingTop:'0.3cm'}}>
                <div className="col-md-6 form-group">
                <span>Gender</span>
                  <input type="text" name="name" className="form-control" id="name" placeholder="male" required style={{marginTop:'0.3cm',backgroundColor:'whitesmoke',border:'0px',height:'1.2cm'}}/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                <span>Address</span>
                  <input type="email" className="form-control" name="email" id="email" placeholder="huye/ngoma" required  style={{marginTop:'0.3cm',backgroundColor:'whitesmoke',border:'0px',height:'1.2cm'}}/>
                </div>
              </div>
              
             
                <div className="text-center"><button type="submit" className="form-control" style={{marginTop:'1.6cm',backgroundColor:'#4c56ad',color:'white',borderRadius:' 10px'}}>create account</button></div>
                </form>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '', border: '0px' }}>
  <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
</div>

            </div>
          </div>
        </section>
        {/* <section> */}
        <br/>
  {/* footer */}
  <Footer/>
        {/* footer */}

        <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>

        <script src="assets/js/main.js"></script>
   
    </>
  );
};

export default LandingPage;
