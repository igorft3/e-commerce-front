import React, { useState } from "react";
import "./profile.css";

// const user = {
//   userid: "1",
//   username: "mich12",
//   email: "michael@email.com",
//   firstName: "Michael",
//   lastName: "Shirma",
//   role: "user",
//   balance: "5642",
// };

// const product = {
//   productid: 10,
//   name: "Product10",
//   price: 75,
//   genre: "merch",
// };

// const backet = {
//   userid: 1,
//   listBacket: [{}],
// };

const Profile = ({ products, user }) => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="profile__container container">
      <ul className="profile__list nav">
        {/* Линк по табуляции */}
        <li
          onClick={() => handleTabClick("profile")}
          className={`profile__item ${
            activeTab === "profile" ? "tab-active" : ""
          }`}
        >
          Мой профиль
        </li>
        <li
          onClick={() => handleTabClick("history")}
          className={`profile__item ${
            activeTab === "history" ? "tab-active" : ""
          }`}
        >
          История заказов
        </li>
        <li className="profile__item">Выйти</li>
      </ul>
      <div className="profile__content">
        {activeTab === "profile" && (
          <ul className="profile__list-user tabs">
            <li className="profile__item-user">
              <h3 className="profile__user-label">Login</h3>
              <p className="profile__user-field">{user.username}</p>
            </li>
            <li className="profile__item-user">
              <h3 className="profile__user-label">Email</h3>
              <p className="profile__user-field">{user.email}</p>
            </li>
            <li className="profile__item-user">
              <h3 className="profile__user-label">First Name</h3>
              <p className="profile__user-field">{user.firstName}</p>
            </li>
            <li className="profile__item-user">
              <h3 className="profile__user-label">Last Name</h3>
              <p className="profile__user-field">{user.lastName}</p>
            </li>
            <li className="profile__item-user">
              <h3 className="profile__user-label">Balance wallet</h3>
              <p className="profile__user-field">{user.balance} y.e.</p>
            </li>
            <li className="profile__item-user">
              <h3 className="profile__user-label">Role</h3>
              <p className="profile__user-field">{user.role}</p>
            </li>
          </ul>
        )}
        {activeTab === "history" && (
          <ul className="profile__list-history tabs">
            {products.map((product, index) => (
              <li key={index} className="profile__item-history">
                <ul className="profile__list-product">
                  <li className="profile__item-product">
                    <h3 className="profile__history-name">Img</h3>
                    <img src={product.imgSrc} alt={`Image ${index}`} />
                  </li>
                  <li className="profile__item-product">
                    <h3 className="profile__history-name">Name</h3>
                    <p className="profile__history-value">{product.name}</p>
                  </li>
                  <li className="profile__item-product">
                    <h3 className="profile__history-name">Price</h3>
                    <p className="profile__history-value">{product.price}</p>
                  </li>
                  <li className="profile__item-product">
                    <h3 className="profile__history-name">Genre</h3>
                    <p className="profile__history-value">{product.genre}</p>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Profile;
