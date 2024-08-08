import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Components/Products';

// 
export const TheContext=createContext()
// 
function App() {
  const [prod,setProd]=useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setProd(res.data.products);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);



  
  return (
    <TheContext.Provider value={prod}>
      
    <div className="App">
 <Products/>
    </div>
    </TheContext.Provider>
  );
}

export default App;
