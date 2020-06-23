import React from 'react';
import './App.css';
import Menue from './menue.js'

function App() {
  return (
    <div className="App">
      <hr/>
      <h1>food lovers list</h1>
    <h2>List from parent </h2>
    <h2>Order your food </h2>
    <hr/>
      <b>
            <li>Biryani</li>
            <li>Chicken</li>
            <li>MUtton</li>
            <li>Pizza</li>
            </b>
           <hr/> 

    <Menue d1="biryani" d2="Chicken Karahi" d3="mutton" d4="Pizza"
    
    />
    

    </div>
  );
}

export default App;
