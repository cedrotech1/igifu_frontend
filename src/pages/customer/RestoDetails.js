import React, { useEffect, useState } from 'react';
import '../../css/main2.css';
import Menu from "../../components/customerM";
import Footer from "../../components/footer";
import { useNavigate, useParams } from 'react-router-dom';
// const categories = [
//   {
//     title: 'Vip category',
//     image: '/assets/img/images (4).jpeg',
//     description: 'Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat. Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat. Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat. Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat. Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat. Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.',
//     price: '9000 Rwf/ month',
//     videoLink: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
//   },
//   // Add more category objects as needed
// ];

const LandingPage = () => {
  const { id } = useParams(); // Use useParams to get the 'id' from the URL



  const [restaurants, setRestaurants] = useState([]);
  const [RestaurantCategories, setRestaurantCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:5000/api/v1/categories/one/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();


        if (data.success) {
          const cat = data.data


          // Assuming you want to filter categories based on the restaurant's id
          // const filteredCategories = restaurant.restaurantCategories.filter(category => category.restaurent === restaurant.id);
          setRestaurantCategories([cat]);
          console.log(cat);
        } else {
          console.error('Restaurant not found with ID:', id);
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
    // navigate(`../one/${id}`);
  };
  return (
    <>
      <Menu />

      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          {RestaurantCategories.map((category, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={100 * index}>
              <div className="row member">
                <div className="col-xl-6 col-md-6 d-flex">
                  <img src='/assets/img/images (4).jpeg' className="img-fluid" alt="" />
                </div>
                <div className="col-xl-6 col-md-6" style={{ padding: '0.4cm' }}>
                  <h3 style={{ textAlign: 'justify' }}>{category.title}</h3>
                  <p style={{ textAlign: 'justify', marginTop: '1cm' }}>{category.description}</p>
                  <p style={{ fontFamily: 'monospace', marginTop: '-0.5cm', textAlign: 'right', fontSize: '20px' }}>
                    Price: {category.price}
                  </p>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                    <a
                      href={category.videoLink}
                      className="glightbox btn-watch-video d-flex align-items-center"
                      style={{ backgroundColor: 'whitesmoke', borderRadius: '6px', width: '4cm', textAlign: 'center', padding: '0.2cm', marginTop: '0.5cm', textDecoration: 'none' }}
                    >
                      &nbsp; &nbsp; &nbsp; &nbsp; Watch Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
