import React, { useState } from "react";
import ProductModal from "../productModal/ProductModal";
import { useAuth } from "../authContext/authContext";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, addToCart } = useAuth();

  const handleBuyClick = () => {
    if (user) {
      alert("Loggin to add product");
    } else {
      addToCart(product);
    }
    console.log(`${product.name} added to the cart`);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <li className="shop__item">
        <img
          src={product.imgSrc}
          className="shop__img"
          alt={product.name}
          onClick={toggleModal}
        />
        <h3 className="shop__subtitle">{product.name}</h3>
        <p className="shop__desc">{product.description}</p>
        <button className="shop__btn" onClick={handleBuyClick}>
          Buy
        </button>
      </li>
      {isModalOpen && <ProductModal product={product} onClose={toggleModal} />}
    </>
  );
};

export default ProductCard;
