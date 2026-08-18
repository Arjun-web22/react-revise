import React from 'react'

import { useState } from 'react';
function AddStudent() {
    const [form,setForm]=useState({
        name:"",
        dep:"",
        year:"",
        cgpa:""
    });
    function handleChange(e){
       setForm({...form,[e.target.name]:e.target.value});
    }

    function handleSubmit(e){
        
        console.log(form);
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name' value={form.name} onChange={handleChange}/>
        <label htmlFor="dep">Department</label>
        <input type="text" name='dep' id='dep' value={form.dep} onChange={handleChange}/>
        <label htmlFor="yaer">Year</label>
        <input type="text" name='year' id='year' value={form.year} onChange={handleChange}/>
        <label htmlFor="cgpa">Cgpa</label>
        <input type="text" name='cgpa' id='cgpa' value={form.cgpa} onChange={handleChange}/>

        <button type='submit'>Add Student</button>
        </form>
        <div>
            <p>Name{form.name}</p>
            <p>Department{form.dep}</p>
            <p>Year{form.year}</p>
            <p>Cgpa{form.cgpa}</p>
        </div>
      
    </div>
  )
}

export default AddStudent
