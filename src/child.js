import React, { useState } from 'react';
import Parent from './parent';
import counterContext from './countercontext';
import { useContext } from 'react';
const Child=()=>{
    let counterC = useContext(counterContext);
    console.log(counterC)
   
    return(
        <div>
            <h1>
                value in counterContxt is {counterC[0]}
            </h1>
            <h1>
                <button onClick={()=>{counterC[1](++counterC[0])}}>press plz</button>
            </h1>
        </div>
    )
}
export default Child;