import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productlist from './components/Productlist';
import Header from './components/Header';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';


function App() {
  return (
  <div>
    <Header/> 
    <Routes>
      <Route path="/" element={<Productlist/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      

    </Routes>
    



  </div>
  );
}

export default App;
