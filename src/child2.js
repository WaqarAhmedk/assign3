import React, { useReducer } from 'react';
import Reducer from './reducer';


const Child2=()=>{
    let [state ,dispatch]=useReducer(Reducer, 1)

    return(
        <div>
            <h1>this is child2 for reducer {state}</h1>
            <button onClick={()=>dispatch('increment')}>increment reducer</button>
            <h2>this reducer ius for decrement </h2>
            <button onClick={()=>dispatch('decrement')}>decrement reducer</button>
    <h2>decrement value{state}</h2>


        </div>
    );
}
export default Child2;