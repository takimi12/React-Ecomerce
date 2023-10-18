import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Login, Register, Reset, Admin } from './pages';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Account from './pages/account/Account';
import AdminOnlyRoute from './components/adminOnlyRoute/AdminOnlyRoute';
import UserLogin from './components/userOnlyRoute/userOnlyRoute';
import Home from './pages/home/Home';
import ProductDetails from './components/product/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import CheckoutDetails from './pages/checkout/CheckoutDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/account/*" element={
            <UserLogin>
              {" "}
              <Account />
            </UserLogin>
          } />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          {/* Dodaj Route dla Home na stronie głównej */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
