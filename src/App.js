import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './AppContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import SearchResults from './components/SearchResults';
import Contact from './components/Contact';
import Footer from './components/Footer';
import data from './data.json';

const initialState = {
  cart: [],
  total: 0,
  products: data.products,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = state.cart.map((item, index) => {
          if (index === existingCartItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          cart: updatedCart,
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price,
        };
      }
    case 'REMOVE_FROM_CART':
      const newCart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: newCart,
        total: state.total - action.payload.price * action.payload.quantity,
      };
    case 'UPDATE_QUANTITY':
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity = action.payload.quantity;
        }
        return item;
      });
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.price * (action.payload.quantity - action.payload.oldQuantity),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [refresh, setRefresh] = useState(false);
  
  const handleRefresh = () => setRefresh(!refresh);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/search"
            element={<SearchResults searchQuery={new URLSearchParams(window.location.search).get('query')} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
