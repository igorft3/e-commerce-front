import React, { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [walletBalance, setWalletBalance] = useState(100);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) =>
          item.productid === product.productid && item.genre === product.genre
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productid, genre) => {
    setCart(
      cart.filter(
        (product) => product.productid !== productid || product.genre !== genre
      )
    );
  };

  const increaseQuantity = (productid, genre) => {
    setCart(
      cart.map((item) =>
        item.productid === productid && item.genre === genre
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productid, genre) => {
    setCart(
      cart.map((item) =>
        item.productid === productid &&
        item.genre === genre &&
        item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const placeOrder = () => {
    const total = calculateTotal();
    if (total <= walletBalance) {
      setWalletBalance(walletBalance - total);
      setCart([]);
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        walletBalance,
        placeOrder,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
