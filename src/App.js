// App.js
import React from 'react';

import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Components
import {Header, Footer} from './components';

// Pages
import {Login, Register, Reset} from './pages';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';


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
</Routes>

<Footer />
</BrowserRouter> 
</>
  );
}

export default App;
