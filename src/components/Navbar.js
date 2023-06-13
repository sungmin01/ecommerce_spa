import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../AppContext';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { state } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
    }
  };

  const handleProductsLinkClick = (e) => {
    if (e.currentTarget.pathname === window.location.pathname) {
      e.preventDefault();
      window.location.reload();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <h1>My Ecommerce</h1>
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ float: 'left' }}
      >
        &#9776;
      </button>
      <nav className={`nav ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
        <ul className={`nav-list ${mobileMenuOpen ? 'nav-list-mobile-open' : ''}`}>
          <div className="nav-search">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                className="search-input"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="nav-button search-button" type="submit">
                <i>
                  <BiSearch />
                </i>
              </button>
            </form>
          </div>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              activeClassName="active"
              onClick={handleProductsLinkClick}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active">
              Cart {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </NavLink>
          </li>
          {mobileMenuOpen && (
            <>
              <li onClick={() => setMobileMenuOpen(false)}>X</li>
              {/* Add more menu items here */}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;