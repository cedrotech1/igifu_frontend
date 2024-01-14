import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, Button } from 'react-bootstrap';
import  '../../css/main2.css';
import Menu from "../../components/employeeeMenu";
import Menu2 from "../../components/employeeMenu2";
const Dashboard = () => {
  const [show, setShow] = useState(false);

 

  return (
    <body className='mybody'>
    <div className="dashboard">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar (visible on medium devices and larger) */}
          <div className={`col-md-3 d-none d-md-block ${show ? 'sidebar-shift' : ''}`}>
            <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="membery">
                <center> <img src="assets/img/profile.png" className="img-fluid imagex" alt="" style={{height:'3cm'}}/></center> 
                  <h5 style={{textAlign:'center',fontFamily:'monospace',textTransform:'',fontWeight:'bold'}}>H.Cedrick</h5>
                 
                  <p style={{textAlign:'center',fontFamily:'monospace',marginBottom:'1cm'}}>
                  Sed autem laudantium dolores. 
                  </p>

                
                </div>
                <center>
                       <Menu2/>
                <center>
                <div className="d-flex justify-content-center ">
                  <a href="register" className="btn-get-started" style={{backgroundColor:'#b6b5b5',borderRadius:'6px',fontFamily:'monospace',textDecoration:'none',padding:'0.2cm',width:'4cm',marginTop:'3cm',color:'black'}}>
                    logout
                  </a>
                </div>
                </center>
                </center>
              </Offcanvas.Body>
            </Offcanvas>
          </div>

          {/* Main Content */}
          <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4 allcontent">
            <div className="row">
              {/* Sidebar Trigger Button (visible on small devices) */}
              
              
              {/* Sidebar (visible on medium devices and larger when Offcanvas is closed) */}
              {!show && (
                <div className="col-md-2 d-none d-md-block d-md-blockx">
                {/* Your menu items go here */}
                  <Menu/>
              </div>
              )}

              {/* Your dashboard content goes here */}
            
              <div className={`col-md-10 ${show ? 'content-shift' : ''}`}>

              <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="row">

              {/* menu bars */}
            <div className="col-12 d-md-none">
                <Button variant="" onClick={() => setShow(!show)}>
                  ☰ 
                </Button>
              </div>


              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{paddingLeft:'0.7cm',marginTop:'0.5cm'}}>
                <div className="row member">
               
                <div className=" col-xl-4 col-md-6 d-flex" style={{backgroundColor:'whitesmoke'}}>
                   
                  <h1 style={{fontSize:'40px'}}>23</h1>
                    </div>
                       <div className=" col-xl-7  col-md-6" style={{margin:'0.1cm'}}>
                    <h5 style={{textAlign:'justify'}}>Employees</h5>
                                     
                        <p style={{textAlign:'justify',fontFamily:'sans-serif'}}>
                        Sed autem laudantium dolores. 
                      
                        </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
              
                 
                </div>
                    </div>
                
                  </div>
                 
              </div>
          

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{paddingLeft:'0.7cm',marginTop:'0.5cm'}}>
                <div className="row member">
               
                <div className=" col-xl-4 col-md-6 d-flex" style={{backgroundColor:'whitesmoke'}}>
                   

                    </div>
                       <div className=" col-xl-7  col-md-6" style={{margin:'0.1cm'}}>
                    <h5 style={{textAlign:'justify'}}>Employees</h5>
                                     
                        <p style={{textAlign:'justify',fontFamily:'sans-serif'}}>
                        Sed autem laudantium dolores. 
                      
                        </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
              
                 
                </div>
                    </div>
                
                  </div>
                 
              </div>



         




              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{paddingLeft:'0.7cm',marginTop:'0.5cm'}}>
                <div className="row member">
               
                <div className=" col-xl-4 col-md-6 d-flex" style={{backgroundColor:'whitesmoke'}}>
                   

                    </div>
                       <div className=" col-xl-7  col-md-6" style={{margin:'0cm'}}>
                    <h5 style={{textAlign:'justify'}}>Employees</h5>
                                     
                        <p style={{textAlign:'justify',fontFamily:'sans-serif'}}>
                        Sed autem laudantium dolores. 
                      
                        </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                </div>
                    </div>
                </div>
                 </div> 
                 
              


          
            </div>
          </div>
        </section>


        <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
           




            <div className="col-xl-11 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
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







            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              {/* <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" /> */}
              <div className="col-xl-12" data-aos="fade-up" data-aos-delay="100" style={{paddingLeft:'0.7cm',marginTop:'0.5cm'}}>
                <div className="row member">
               
                
                       <div className=" col-xl-12  col-md-6" style={{margin:'0cm'}}>
                    <h5 style={{textAlign:'justify'}}>Employees</h5>
                                     
                        <p style={{textAlign:'justify',fontFamily:'sans-serif'}}>
                        Sed autem laudantium dolores. 
                      
                        </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                </div>
                    </div>
                </div>
                 </div> 






                 <div className="col-xl-12" data-aos="fade-up" data-aos-delay="100" style={{paddingLeft:'0.7cm',marginTop:'3cm',backgroundColor:'whitesmoke'}}>
                <div className="row member">
               
                
                       <div className=" col-xl-12  col-md-6" style={{margin:'0cm'}}>
                    <h5 style={{textAlign:'justify'}}>Employees</h5>
                                     
                    <div className="col-xl-12" data-aos="fade-up" data-aos-delay="100" style={{paddingLeft:'0.7cm',marginTop:'0.5cm'}}>
                <div className="row member">
               
                
                       <div className=" col-xl-12  col-md-6" style={{margin:'0cm'}}>
                    <h5 style={{textAlign:'justify'}}>Employees</h5>
                                     
                        <p style={{textAlign:'justify',fontFamily:'sans-serif'}}>
                        Sed autem laudantium dolores.  Sed autem laudantium dolores.  Sed autem laudantium dolores. 
                        Sed autem laudantium dolores.  Sed autem laudantium dolores.  Sed autem laudantium dolores. 
                        Sed autem laudantium dolores.  Sed autem laudantium dolores.  Sed autem laudantium dolores. 
                      
                        </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                </div>
                    </div>
                </div>
                 </div> 
                    <div className="d-flex justify-content-center justify-content-lg-start">
                </div>
                    </div>
                </div>
                 </div> 


                 
            </div>
          </div>
        </div>
      </section>










              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

    </body>
  );
};

export default Dashboard;
