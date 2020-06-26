import React, {useState}from 'react';
import Parent from './parent';
import counterContext from './countercontext';

function App() {
  let count =useState(1); //ARRAY with 2 fun [count,setCount]
  return (

  <counterContext.Provider value={count} >
    <div>
     
      <Parent/>
    </div>
  </counterContext.Provider>
 );
}

export default App;