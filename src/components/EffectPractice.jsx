import React from 'react'

import {useState, useEffect } from 'react'
function EffectPractice() {

    const [count,setCount]=useState(0);
    function handleChange(){
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("Component Rendered");
    },[count]);
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={handleChange}>Increase</button>
    </div>
  )
}

export default EffectPractice
