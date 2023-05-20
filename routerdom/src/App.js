import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import AuthRoute from "./components/AuthRoute";

const App = () => {
  const jwtToken = Cookies.get("jwt_token");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <AuthRoute jwtToken={jwtToken}>
              <Home />
            </AuthRoute>
          }
        />
        <Route
          path="/products"
          element={
            <AuthRoute jwtToken={jwtToken}>
              <Products />
            </AuthRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <AuthRoute jwtToken={jwtToken}>
              <ProductDetails />
            </AuthRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthRoute jwtToken={jwtToken}>
              <Cart />
            </AuthRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
