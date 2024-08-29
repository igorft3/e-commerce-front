import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/authContext/authContext";
import "./login.css";

const Login = () => {
  // Состояния для хранения значений полей формы
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  // Состояние для хранения ошибок
  const [errors, setErrors] = useState({
    passwordMatch: "",
    requiredFields: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  // Состояние для переключения между авторизацией и регистрацией
  const [isAuth, setIsAuth] = useState(true);

  // Получаем функции login и logout из контекста авторизации
  const { login } = useAuth();
  const navigate = useNavigate();

  // Обработчик изменения значений полей ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      login: userLogin,
      password,
      confirmPassword,
      firstName,
      lastName,
      email,
    } = formData;
    const newErrors = { ...errors };

    // Проверка на совпадение паролей при регистрации
    if (!isAuth && password !== confirmPassword) {
      newErrors.passwordMatch = "Пароли не совпадают";
    } else {
      newErrors.passwordMatch = "";
    }

    // Проверка обязательных полей для регистрации
    if (!isAuth) {
      newErrors.requiredFields = {
        firstName: firstName ? "" : "Имя обязательно для заполнения",
        lastName: lastName ? "" : "Фамилия обязательна для заполнения",
        email: email ? "" : "Email обязателен для заполнения",
      };

      // Если есть ошибки, не отправляем форму
      if (!firstName || !lastName || !email) {
        setErrors(newErrors);
        return;
      }
    }

    // Если нет ошибок, отправляем запрос на сервер
    try {
      const response = await fetch("http://10.4.56.79:8082/api/all/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userLogin,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, userData } = data;

        // Сохранение токена и установка состояния авторизации
        login(userData, token);

        // Перенаправление на главную страницу после успешной авторизации
        navigate("/");
      } else {
        const errorData = await response.json();
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: errorData.message || "Ошибка авторизации",
        }));
      }
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: "Ошибка соединения с сервером",
      }));
    }
  };

  // Обработчик переключения между авторизацией и регистрацией
  const handleToggle = () => {
    setIsAuth((prevState) => !prevState);
  };

  return (
    <div className="login__container container">
      <form method="post" className="login__form" onSubmit={handleSubmit}>
        {!isAuth && (
          <>
            <label htmlFor="firstName">
              <p className="label-field">First name</p>
              <input
                name="firstName"
                type="text"
                className="login__input"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </>
        )}

        {!isAuth && (
          <>
            <label htmlFor="lastName">
              <p className="label-field">Last name</p>
              <input
                name="lastName"
                type="text"
                className="login__input"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </>
        )}
        <label htmlFor="login">
          <p className="label-field">Login</p>
          <input
            name="login"
            type="text"
            className="login__input"
            value={formData.login}
            onChange={handleChange}
          />
        </label>

        {!isAuth && (
          <label htmlFor="email">
            <p className="label-field">Email</p>
            <input
              name="email"
              type="email"
              className="login__input"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        )}

        <label htmlFor="password">
          <p className="label-field">Password</p>
          <input
            name="password"
            type="password"
            className="login__input"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        {!isAuth && (
          <>
            <label htmlFor="confirmPassword">
              <p className="label-field">Repeat password</p>
              <input
                name="confirmPassword"
                type="password"
                className="login__input"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
            {errors.passwordMatch && (
              <p className="error">{errors.passwordMatch}</p>
            )}
          </>
        )}

        {errors.general && <p className="error">{errors.general}</p>}

        <button className="login__btn" type="submit">
          {isAuth ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
      <button
        onClick={handleToggle}
        className={`login__btn ${isAuth ? "tab-active" : ""}`}
      >
        {isAuth ? "Регистрация" : "Авторизация"}
      </button>
    </div>
  );
};

export default Login;
