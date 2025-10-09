import axios from 'axios';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { TrackingPage } from './pages/TrackingPage';
import { OrdersPage } from './pages/OrdersPage';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

    useEffect(()=>{
      axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      });
    }, []);
    

  return (
    <Routes>
      <Route index element={ <HomePage cart={cart} />} />
      <Route path= "checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element= {<OrdersPage/>} />
      <Route path="tracking" element={<TrackingPage/>} />
      </Routes>
  )
} 
export default App
