import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const featured = state.products.filter((product) => product.featured);
    setFeaturedProducts(featured);
  }, [state.products]);

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 },
    });
  };

  return (
    <main>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <div
              className="carousel-bg d-block w-100"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                backgroundSize: 'cover',
                height: '800px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
              <div className="carousel-caption">
                  <h2>Stay Connected on the Go</h2>
                  <p>
                    Keep up with the latest trends and stay connected on-the-go with our selection of
                    smartphones. Choose from top brands and affordable options, with advanced features
                    to enhance your mobile experience.
                  </p>
                  <button className="btn-carousel">Shop Now</button>
                </div>
              </div>
  
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carousel-bg d-block w-100"
              style={{
                backgroundImage: 'url(https://assets.mspimages.in/wp-content/uploads/2021/06/pjimage-1.jpg)',
                backgroundSize: 'cover',
                height: '800px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <div className="carousel-caption px-4">
                  <h2>Power and Portability at your Fingertips</h2>
                  <p>
                  Discover our wide range of laptops for all your computing needs. From ultrabooks to gaming laptops, 
                  our selection offers the perfect combination of power and portability for your lifestyle.
                  </p>
                  <button className="btn-carousel">Shop Now</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carousel-bg d-block w-100"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1600003263720-95b45a4035d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
                backgroundSize: 'cover',
                height: '800px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <div className="carousel-caption px-4">
                  <h2>The Ultimate Gaming Experience</h2>
                  <p>
                  Take your gaming experience to the next level with our high-performance graphics cards. 
                  Choose from top brands and the latest technology for smooth and fast gameplay.
                  </p>
                  <button className="btn-carousel">Shop Now</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="container">

              <div className="row">
                {featuredProducts.map((product) => (
                  <div className="col-md-4" key={product.id}>

                    <div className="products_container_card">
                      <div className="card-body">
                        
                        <Link to={`/products/${product.id}`}>
                          <div className="image-products">
                            <img src={product.image} alt={product.name} className="img-fluid mb-2" />
                          </div>
                        </Link>
                        <h5 className="card-title">
                          <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </h5>
                        <p className="card-text">Price: <span>${product.price}</span></p>

                        <div className="buttons">
                        <Link className="more-info" to={`/products/${product.id}`}>More Info</Link>

                            <button
                              className="add-to-cart-button"
                              onClick={() =>
                                dispatch({
                                  type: 'ADD_TO_CART',
                                  payload: { ...product, quantity: 1 },
                                })
                              }
                            >
                              Add to cart
                            </button>
                        </div>

                      </div>
                    </div>

                  </div>
                ))}
              </div>

        </div>
      </div>

      <div className="sub-content">

        <div className="offer">
              <h1>Limited Time Offer</h1>
              <h3>Special Addition</h3>
              <p>It is a limited-time promotion that provides customers with an exclusive discount or unique product bundle.</p>
              <button className="shop-now">Shop Now</button>
        </div>

      </div>
      
      <div className="container why_chooose">
        <h1>Why Choose Us</h1>
        <div className="row sections">
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Worldwide Shipping</h2>
                <p className="card-text">We offer worldwide shipping to make our products accessible to customers all over the world.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Best Quality</h2>
                <p className="card-text">We believe in providing our customers with only the best quality products.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Best Offers</h2>
                <p className="card-text">We pride ourselves on offering the best deals and discounts to our customers.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 section">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Secure Payments</h2>
                <p className="card-text">We offer a range of secure payment options to ensure that your transactions are safe and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;
