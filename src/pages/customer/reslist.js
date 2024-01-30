import React, { useEffect, useState } from 'react';
import '../../css/main2.css';

import Menu from '../../components/customerM';
import Footer from '../../components/footer';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'; // Importing icons from the 'react-icons' library
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/v1/restaurent/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          setRestaurants(data.data);
        } else {
          console.error('Failed to fetch restaurants:', data.message);
        }

        // Set loading to false after fetching data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        // Set loading to false in case of an error
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleView = (id) => {
    // Handle view logic
    // Example: Navigate to a page with the restaurant ID
    navigate(`../one/${id}`);
  };
  return (
    <>
      <Menu />
      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h5 style={{ fontSize: '35px', fontStyle: 'bold'}}>
                <b>LIST OF ALL <span className='apart' style={{color:'#f38a7a'}}>RESTAURENT</span> </b>
              </h5>
              <p style={{ fontFamily: 'monospace' }}>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              {/* Uncomment and add the appropriate path for your image */}
                {/* <img src="assets/img/hero-img.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" /> */}
               
            </div>
          </div>
        </div>
      </section>

<section id="team" className="team">
  <div className="container" data-aos="fade-up">
    <div className="row gy-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        restaurants.map((restaurant) => (
          <div onClick={() => handleView(restaurant.id)} key={restaurant.id} className="col-xl-4 col-md-6 " data-aos="fade-up" data-aos-delay={100 * restaurant.id} style={{ padding: '' }}>
            <div className="member col-xl-12">
              <img src='assets/img/images (3).jpeg' className="img-fluid" alt="" style={{ height: 'auto', padding: '0px', width: '100%', borderRadius: '7px' }} />
              <h4 style={{ textAlign: 'justify' }}>{restaurant.name}</h4>

              <p style={{ textAlign: 'justify' }}>
                {restaurant.description}
                <p style={{ textAlign: 'center', fontStyle: 'italic', fontPalette: '13px', backgroundColor: '#faead1', padding: '0.4cm', marginTop: '20px', borderRadius: '6px' }}>
                  <BiMap className="" style={{ color: 'black' }} />&nbsp;&nbsp;{restaurant.address} <br />
                  <BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} />&nbsp;&nbsp;obina@gmail.com <br />
                  <BiPhone />&nbsp;&nbsp;07854635367
                </p>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</section>



      <Footer />
    </>
  );
};

export default LandingPage;


// const filteredCategories = restaurant.restaurantCategories.filter(category => category.restaurent === restaurant.id);
// setRestaurantCategories(filteredCategories);