import React, { useState } from 'react'

function Counter() {

    const [count,setCount]=useState(0);

  return (
    <div>
        <p>{count}</p>  
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>count-1<=0?setCount(0):setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Clear</button>
    </div>
  )
}

export default Counter
