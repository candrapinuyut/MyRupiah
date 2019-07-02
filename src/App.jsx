import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';

import  './App.css';
import  './elements/Grid.css';
import  './elements/Input.css';
import  './elements/Button.css';



function App() {
  return (
    <div className="App">
  
      <Header />
      <Home /> 
      
    </div>
    
    
  );
}

export default App;
