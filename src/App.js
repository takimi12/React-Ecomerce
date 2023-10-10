import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Components
import {Header, Footer} from './components';

// Pages
import {Home} from './pages';

function App() {

  return (
<>
<BrowserRouter>
<Header />

<Routes>
{/* <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} /> */}
</Routes>

<Footer />
</BrowserRouter> 
</>
  );
}

export default App;
