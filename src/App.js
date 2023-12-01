import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components';
import { Login, Register, Reset, Admin } from './pages';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Account from './pages/account/Account';
import UserLogin from './components/userOnlyRoute/userOnlyRoute';
import Home from './pages/home/Home';
import ProductDetails from './components/product/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import CheckoutDetails from './pages/checkout/CheckoutDetails';
import Checkout from './pages/checkout/Checkout';
import CheckoutSuccess from './pages/checkout/CheckoutSucces';
import OrderHistory from './pages/orderHistory/OrderHistory';
import OrderDetails from './pages/orderDetails/OrderDetails';import ReviewProducts from './components/reviewProducts/ReviewProducts';
import Product from './components/product/Product';

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
          <Route path="/shop"  element={<Product />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/review-product/:id" element={<ReviewProducts />} />
          {/* Dodaj Route dla Home na stronie głównej */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
