import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  const [sortOrder, setSortOrder] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(state.products);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePriceRangeApply = () => {
    const newFilteredProducts = [...state.products].filter((product) => {
      return (
        (minPrice === '' || product.price >= parseFloat(minPrice)) &&
        (maxPrice === '' || product.price <= parseFloat(maxPrice))
      );
    });
    setFilteredProducts(newFilteredProducts);
  };

  useEffect(() => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === 'priceAsc') {
        return a.price - b.price;
      } else if (sortOrder === 'priceDesc') {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  }, [sortOrder]);

  return (
    <div className="products_container">
      <h2>All Products</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="sort" className="form-label">Sort by:</label>
              <select id="sort" className="form-select" value={sortOrder} onChange={handleSortChange}>
                <option value="">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Price Range:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handlePriceRangeApply}>Apply</button>
          </div>

          <div className="col-md-9">
            <div className="row">
              {filteredProducts.map((product) => (
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
      </div>
    </div>
    );
};

export default Products;