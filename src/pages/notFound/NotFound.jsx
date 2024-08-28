import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry...</p>
      <Link to="/about">Go to Home</Link>
    </div>
  );
};

export default NotFound;
