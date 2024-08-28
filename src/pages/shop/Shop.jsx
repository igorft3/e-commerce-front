import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { products } from "../../data";
import "./shop.css";

const Shop = () => {
  return (
    <section className="shop">
      <div className="shop__container container">
        <div className="shop__wrapp-text">
          <h1 className="shop__title">Закажи cебе, мне и ему тоже...</h1>
          <p className="shop__text">Да да, прямо сейчас...</p>
        </div>

        <ul className="shop__list-filter">
          <li className="shop__item__filter">
            <div className="shop__filter-wrapp">
              <p className="shop__filter-name">Category</p>
              <h3 className="shop__filter-value">All Category</h3>
            </div>
            <span></span>
          </li>
          <li className="shop__item__filter">
            <div className="shop__filter-wrapp">
              <p className="shop__filter-name">Color</p>
              <h3 className="shop__filter-value">All Callors</h3>
            </div>
            <span></span>
          </li>
          <li className="shop__item__filter">
            <div className="shop__filter-wrapp">
              <p className="shop__filter-name">Size</p>
              <h3 className="shop__filter-value">All Size</h3>
            </div>
            <span></span>
          </li>
          <li className="shop__item__filter">
            <div className="shop__filter-wrapp">
              <p className="shop__filter-name">Price</p>
              <h3 className="shop__filter-value">From $0 - $1000</h3>
            </div>
            <span></span>
          </li>
          <li className="shop__item__filter">
            <div className="shop__filter-wrapp">
              <p className="shop__filter-name">Sort</p>
              <h3 className="shop__filter-value">New In</h3>
            </div>
            <span></span>
          </li>
        </ul>
        <ul className="shop__list">
          <ProductCard product={products} />
        </ul>
      </div>
    </section>
  );
};

export default Shop;
