import React from 'react'

function StudentCard({name,dep,year,cgpa}) {
  return (
    <div>
      <p>Name{name}</p>
      <p>Department:{dep}</p>
      <p>Year:{year}</p>
      <p>CGPA:{cgpa}</p>
    </div>
  )
}

export default StudentCard
