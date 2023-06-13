import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { state, dispatch } = useContext(AppContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query').toLowerCase();

  const filteredProducts = state.products.filter((product) => {
    const name = product.name || '';
    const description = product.description || '';
    const regex = new RegExp(`\\b${query}\\b`, 'i');
  
    return (
      regex.test(name) || regex.test(description)
    );
  });  

  return (
    <div>
      <h1>Search Results</h1>
      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <Link to={`/products/${product.id}`}>
                    <h5 className="card-title">{product.name}</h5>
                  </Link>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-primary"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;