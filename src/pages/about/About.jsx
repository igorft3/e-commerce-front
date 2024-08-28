import React from "react";
import RandomProductList from "../../components/randomProductList/RandomProductList";
import ProductCarousel from "../../components/productCarusel/ProductCarousel";
import { products } from "../../data";

const About = () => {
  return (
    <main>
      <section className="main">
        <div className="main__container container">
          <RandomProductList items={products} />
        </div>
      </section>
      {/* <section className="carousel">
        <div className="carousel__container container">
          <ProductCarousel items={products} />
        </div>
      </section> */}
    </main>
  );
};

export default About;
