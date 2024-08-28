import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Profile from "./pages/profile/Profile";
import LoginPage from "./components/loginPage/loginPage";
// import OrderModal from "./components/orderModal/orderModal";
import NotFound from "./pages/notFound/NotFound";
import { AuthProvider, useAuth } from "./components/authContext/authContext";
import { products, user, product, backet } from "./data";
import "./App.css";
import "./normalize.css";

const App = () => {
  // const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  // const { user } = useAuth();

  // const toggleOrderModal = () => {
  //   setIsOrderModalOpen(!isOrderModalOpen);
  // };

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/profile"
            element={<Profile products={products} user={user} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* {isOrderModalOpen && <OrderModal onClose={toggleOrderModal} />} */}
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
