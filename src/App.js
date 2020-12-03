import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyle'
import { Hero } from './components/Hero/Hero';
import Products from './components/Products/Products';
import {productData} from './components/Products/Data'
function App() {
  return (
    <Router>
      <GlobalStyle/>
        <Hero/>
        <Products heading='Choose your favorite' data={productData}/>
    </Router>
  );
}

export default App;
