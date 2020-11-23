import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyle'
function App() {
  return (
    <Router>
      <GlobalStyle/>
        <Navbar/>
    </Router>
  );
}

export default App;
