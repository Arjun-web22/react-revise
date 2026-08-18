import React from 'react'

function StudentInfo() {

    const name="Arjun";
    const age=20;
    const dep="Information Technology";
    const cgpa=8.4;
    const nstatus="Not Placed";
    const pstatus="Placed";
    const isplaced=true;
  return (
    <div>
        <h1>Student Information</h1>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Department:{dep}</p>
      <p>CGPA:{cgpa}</p>
      <p>PLACEMENT STATUS:{isplaced ? pstatus :nstatus}</p>   
    </div>
  )
}

export default StudentInfo
