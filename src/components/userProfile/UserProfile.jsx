import React from "react";

const UserProfile = (user) => {
  return (
    <ul className="profile__list-user tabs">
      <li className="profile__item-user">
        <h3 className="profile__user-label">Логин</h3>
        <p className="profile__user-field">{user.username}</p>
      </li>
      <li className="profile__item-user">
        <h3 className="profile__user-label">Емаил</h3>
        <p className="profile__user-field">{user.email}</p>
      </li>
      <li className="profile__item-user">
        <h3 className="profile__user-label">Имя</h3>
        <p className="profile__user-field">{user.firstName}</p>
      </li>
      <li className="profile__item-user">
        <h3 className="profile__user-label">Фамилия</h3>
        <p className="profile__user-field">{user.lastName}</p>
      </li>
      <li className="profile__item-user">
        <h3 className="profile__user-label">Баланс колешелька</h3>
        <p className="profile__user-field">{user.balance} y.e.</p>
      </li>
      <li className="profile__item-user">
        <h3 className="profile__user-label">Роль</h3>
        <p className="profile__user-field">{user.role}</p>
      </li>
    </ul>
  );
};

export default UserProfile;
