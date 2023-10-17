// App.js
import React from 'react';

import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Components
import {Header, Footer} from './components';

// Pages
import {Login, Register, Reset, Admin} from './pages';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Account from './pages/account/Account';
import AdminOnlyrRoute from './components/adminOnlyRoute/AdminOnlyRoute';
import UserLogin from './components/userOnlyRoute/userOnlyRoute';
import Home from './pages/home/Home';
function App() {

  return (
<>
<BrowserRouter>
<Header />
<Breadcrumbs />

<Home />
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

</Routes>

<Footer />
</BrowserRouter> 
</>
  );
}

export default App;
