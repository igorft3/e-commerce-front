import React, { useState } from "react";
import { products } from "../../data";
import { useCart } from "../../components/cartContext/CartContext";
import "./profile.css";
import ManagerDashboard from "../../components/managerDashboard/ManagerDashboard ";
import OrderHistory from "../../components/orderHistory/OrderHistory";
import UserProfile from "../../components/userProfile/UserProfile";
// is auth роль

const user = {
  userid: "1  ",
  username: "mich12",
  email: "michael@email.com",
  firstName: "Michael",
  lastName: "Shirma",
  role: "user",
  balance: "5642",
};

const Profile = () => {
  const [isRole, setIsRole] = useState("manager");
  const [activeTab, setActiveTab] = useState("profile");
  const [hasToken, setHasToken] = useState(true);
  const [activeTabManager, setActiveTabManager] = useState("create");
  const { userInfo, userRole, orders } = useCart();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handelTabManageClick = (tabName) => {
    setActiveTabManager(tabName);
  };

  const handleDeleteToken = () => {
    setHasToken(!hasToken);
    if (hasToken) {
      console.log("Токен есть");
    } else {
      console.log("Токен удален");
    }
  };
  return (
    <section className="profile__container container">
      <ul className="profile__list nav">
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
        {isRole === "manager" && (
          <li
            onClick={() => handleTabClick("manager")}
            className={`profile__item ${
              activeTab === "manager" ? "tab-active" : ""
            }`}
          >
            Управление товарами
          </li>
        )}
        <li className="profile__item" onClick={handleDeleteToken}>
          Выйти
        </li>
      </ul>
      <div className="profile__content">
        {activeTab === "profile" && <UserProfile user={userInfo} />}
        {activeTab === "history" && <OrderHistory Card={orders} />}
        {activeTab === "manager" &&
          (userRole === "manager" || userRole === "admin") && (
            <ManagerDashboard />
          )}
      </div>
    </section>
  );
};

export default Profile;
