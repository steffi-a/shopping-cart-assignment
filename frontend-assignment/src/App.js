import logo from './logo.svg';
import './App.css';
import Registration from './Registration.js';
import LoginPage from './Login.js';
import Home from './Home';
import Product from './Product';
import CartPage from './components/Cart';
import { store } from './core/store';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
        <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Product/>} />
                <Route path='/products/:id' element={<Product/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/registration' element={<Registration/>} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
        </BrowserRouter>
    </Provider>
        
        
      
    </div>
  );
}

export default App;
