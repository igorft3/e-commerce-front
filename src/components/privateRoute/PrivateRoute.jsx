import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     console.log("Есть токен:", token);
  //   } else {
  //     console.log("Токен отсутствует");
  //     navigate("/");
  //   }
  // }, [token, navigate]);

  // return token ? element : null;
  return token ? element : element;
};

export default PrivateRoute;
