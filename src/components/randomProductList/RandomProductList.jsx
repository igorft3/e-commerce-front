import React from "react";
import "./randomProductList.css";

const RandomProductList = ({ items }) => {
  const images = items.map((item) => item.imgSrc);

  return (
    <>
      <div className="main__container container">
        <ul className="main__wrapp-list">
          <li className="main__wrapp-item">
            <h2 className="main__subtitle">About us something</h2>
          </li>
          {images.slice(0, 3).map((imgSrc, index) => (
            <li key={index} className="main__wrapp-item">
              <img src={imgSrc} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
        <ul className="main__wrapp-list">
          {images.slice(9).map((imgSrc, index) => (
            <li key={index} className="main__wrapp-item">
              <img src={imgSrc} alt={`Image ${index + 4}`} />
            </li>
          ))}
          <li className="main__wrapp-item">
            <h2 className="main__subtitle">interactive</h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RandomProductList;
