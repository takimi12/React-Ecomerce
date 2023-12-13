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
import Product from './components/product/Product';
import Compare from './components/admin/compare/Compare';
import Wishlist from './components/admin/wishlist/WishList';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import FAQComponent from './pages/faq/FAQ';
import Blog from './pages/blog/Blog';
import NotFoundPage from './pages/404/404';
import ProductPopUp from './components/product/productPopUp/ProductPopUp';

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
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shop"  element={<Product />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/faq"  element={<FAQComponent />} />
          <Route path="/blog"  element={<Blog />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
           <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <ProductPopUp />
      </BrowserRouter>
    </>
  );
}

export default App;
