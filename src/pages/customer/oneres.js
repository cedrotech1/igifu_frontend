
import Menu from '../../components/customerM';
import Footer from '../../components/footer';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi'; // Importing icons from the 'react-icons' library
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantCategories, setrestaurantCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Use useParams to get the 'id' from the URL
  
  useEffect(() => {
    
    const fetchRestaurants = async () => {
      if (!id) {
        console.error('Restaurant ID is missing.');
        return;
      }
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/v1/Restaurent`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const data = await response.json();
        // console.log(data);
  
        if (data.success) {
          // Assuming 'data.data' is an array of restaurants
          const ResArray = Array.isArray(data.data) ? data.data : [];

          // Find the restaurant with the specified ID
          const filteredRes = ResArray.find(rest => rest.id === Number(id));
          
          if (filteredRes) {
            // If a restaurant is found, set it in the state    restaurantCategories

            setRestaurants(filteredRes);
            setrestaurantCategories(filteredRes.restaurantCategories);
            console.log(restaurantCategories);
          } else {
            console.error('Restaurant not found with ID:', id);
          }
          
          // Set loading to false after fetching data
          setLoading(false);
          
        } else {
          // console.error('Failed to fetch restaurants:', data.message);
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
  }, [id]); // Include 'id' in the dependency array to trigger the effect when 'id' changes
  

  const handleView = (id) => {
    // Handle view logic
    // Example: Navigate to a page with the restaurant ID
    navigate(`../details/${id}`);
    // console.log(id)
  };


  return (
    <>
      <Menu />



      <section id="hero" className="hero">
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h5 style={{ fontSize: '35px', marginBottom: '0.5cm', marginTop: '0cm', fontStyle: 'bold', fontFamily: 'monospace' }}>
                <b>{restaurants.name}</b>
              </h5>
              <p style={{ marginBottom: '0.5cm', marginTop: '0cm', fontStyle: 'bold', fontFamily: 'monospace' }}>
              {restaurants.description}
              </p>

              <p style={{ marginBottom: '0.5cm', marginTop: '0cm', fontStyle: 'bold', fontFamily: 'monospace', marginTop: '1cm' }}>

                <i className="bi bi-envelope flex-shrink-0" style={{ backgroundColor: 'white' }}><BiEnvelope className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} /></i>
                &nbsp; <span>  cedrickhakuzimana@gmail.com</span><br />
                <i className="bi bi-envelope flex-shrink-0" style={{ backgroundColor: 'white' }}><BiPhone className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} /></i>

                &nbsp; <span> 07853435654</span><br />

                <i className="bi bi-envelope flex-shrink-0" style={{ backgroundColor: 'white' }}><BiMap className="flex-shrink-0 bi bi-envelope flex-shrink-0" style={{ color: 'black' }} /></i>

                &nbsp; <span>{restaurants.address}
                </span>


              </p>



            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="/assets/img/breakfast from bed-pana.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" style={{height:'auto',width:'100%',borderRadius:'7px'}} />

            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
            <h6 style={{ fontSize: '28px', marginBottom: '0.5cm', marginTop: '0cm', fontStyle: 'bold', fontFamily: 'monospace' }}>
              <i>Meal card categories</i>
            </h6>
            <p style={{ fontFamily: 'monospace', marginLeft: '0cm' }}>
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
            </p>
          </div>
          <div className="row gy-4">
            {restaurantCategories.map((category, index) => (
              <div onClick={() => handleView(category.id)} key={index} className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                <div className="member">
                  <img src='/assets/img/images (4).jpeg' className="img-fluid" alt="" style={{ height: 'auto', width: '100%', borderRadius: '7px' }} />
                  <h4 style={{ textAlign: 'justify', fontFamily: 'monospace', textTransform: 'uppercase' }}>{category.title}</h4>
                  <p style={{ textAlign: 'justify', fontFamily: 'monospace', marginLeft: '0cm' }}>{category.description}</p>
                  <p style={{ fontFamily: 'monospace', marginTop: '-0.5cm', textAlign: 'justify', fontSize: '20px' }}>
                    Price: {category.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer />
      {/* footer */}

      {/* <script src="assets/js/main.js"></script> */}

    </>
  );
};

export default LandingPage;
