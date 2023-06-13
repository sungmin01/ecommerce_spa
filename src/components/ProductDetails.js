import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../AppContext';

const ProductDetails = () => {
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const product = state.products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity: 1 },
    });
  };

  return (
    <div className="container_productdetails">
    <div className="container">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-product-details" />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h5>{product.name}</h5>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>

          {/* Stock Availability */}
          <p>
            {product.stock > 0
              ? `In Stock (${product.stock} available)`
              : 'Out of Stock'}
          </p>

          {/* Add to Cart Button */}
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to cart
          </button>

          {/* Product Description */}
          <div>
            <h5>About this item</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;