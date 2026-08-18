import React from 'react'
import {useState} from 'react'
function EventPractice() {

  const [name,setName]=useState("");
    function handleChange(e){
       setName(e.target.value);
    }
    function handleSubmit(e){
      console.log(name)
    }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
      <p>Hello {name}</p>
    </div>
  )
}

export default EventPractice
