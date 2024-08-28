import React, { useState } from "react";
import { useAuth } from "../authContext/authContext";
import PersonSVG from "../personSvg/personSvg";
import "./orderModal.css";

const OrderModal = ({ onClose }) => {
  const { cart, setCart, walletBalance } = useAuth();
  const [cartItems, setCartItems] = useState(cart);
  const [totalAmount, setTotalAmount] = useState(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  const updateTotalAmount = (updatedCart) => {
    const newTotal = updatedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalAmount(newTotal);
  };

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    updateTotalAmount(updatedCart);
    setCart(updatedCart);
  };

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      updateTotalAmount(updatedCart);
      setCart(updatedCart);
    }
  };

  const handleDelete = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    updateTotalAmount(updatedCart);
    setCart(updatedCart);
  };

  const handleOrder = () => {
    setCart([]);
    setCartItems([]);
    setTotalAmount(0);
    onClose();
    alert("Ваш заказ был успешно офо");
  };

  return (
    <div id="popupCart" className="shop__popup popup" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="popup__wrapp">
          <p className="popup__buck">
            <svg
              className="cart-svg"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.787 15.981l14.11-1.008L23.141 6H5.345L5.06 4.37a1.51 1.51 0 0 0-1.307-1.23l-2.496-.286-.114.994 2.497.286a.502.502 0 0 1 .435.41l1.9 10.853-.826 1.301A1.497 1.497 0 0 0 6 18.94v.153a1.5 1.5 0 1 0 1 0V19h11.5a.497.497 0 0 1 .356.15 1.502 1.502 0 1 0 1.074-.08A1.497 1.497 0 0 0 18.5 18H6.416a.5.5 0 0 1-.422-.768zM19.5 21a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5zm-13 0a.5.5 0 1 1 .5-.5.5.5 0 0 1-.5.5zM21.86 7l-1.757 7.027-13.188.942L5.52 7z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
            Cart<span>{cartItems.length}</span>
          </p>
          <p className="popup__bill wallet">
            <PersonSVG />${walletBalance.toFixed(2)}
          </p>
        </div>
        {cartItems.length > 0 ? (
          <ul className="bill__list">
            {cartItems.map((product, index) => (
              <li key={index} className="bill__item">
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="bill__img"
                />
                <p className="bill__name">{product.name}</p>
                <div className="bill__count-wrapp">
                  <button
                    className="bill__btn-dec"
                    onClick={() => handleDecrease(index)}
                  >
                    -
                  </button>
                  <span className="bill__count">{product.quantity}</span>
                  <button
                    className="bill__btn-inc"
                    onClick={() => handleIncrease(index)}
                  >
                    +
                  </button>
                </div>
                <p className="bill__name">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
                <button
                  className="btn__delete"
                  onClick={() => handleDelete(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="bill__wrapp">
          <span className="bill__result">
            Итого: <span>${totalAmount.toFixed(2)}</span>
          </span>
          <button
            className="bill__btn-order"
            disabled={totalAmount > walletBalance}
            onClick={handleOrder}
          >
            Оформить заказ
          </button>
          {totalAmount > walletBalance && (
            <p className="error-text">
              Недостаточно средств на вашем счету для оформления заказа.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
