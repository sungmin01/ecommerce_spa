import React, { useContext } from 'react';
import AppContext from '../AppContext';

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleQuantityChange = (e, id, oldQuantity) => {
    const quantity = parseInt(e.target.value);
    if (quantity === 0) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: {
          id,
          price: state.cart.find((item) => item.id === id).price,
          quantity: oldQuantity,
        },
      });
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: {
          id,
          quantity,
          oldQuantity,
          price: state.cart.find((item) => item.id === id).price,
        },
      });
    }
  };

  const handleCheckout = () => {
    alert('Checkout not implemented yet');
  };

  return (
    <div>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(e, item.id, item.quantity)
                      }
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: {
                            id: item.id,
                            price: item.price,
                            quantity: item.quantity,
                          },
                        })
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3"></td>
                <td>Total:</td>
                <td>${state.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
