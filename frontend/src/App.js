import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/eurofarma' element = {<ShopCategory category="eurofarma"/>}/>
        <Route path='/medley' element = {<ShopCategory category="medley"/>}/>
        <Route path='/neoquimica' element = {<ShopCategory category="neoquimica"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
