import React, { useState } from 'react'

function Array() {
    const [students,setStudents]=useState(["Arjun","Rahul","Priya","Karthik"]);
  return (
    <div>
      <button onClick={()=>setStudents([...students,"Karthick"])}>Add Student</button>
      {students.map((s,i)=><p>{s}</p>)}
    </div>
  )
}

export default Array
