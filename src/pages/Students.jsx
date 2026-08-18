import React, { useState } from 'react'
import StudentInfo from '../components/StudentInfo'
import StudentCard from '../components/StudentCard'
import AddStudent from '../components/AddStudent'
function Students() {

  const [students,setStudents]=useState([{name:"Arjun",dep:"IT",year:"IV",cgpa:"8.4"},{name:"Rahul",dep:"CSE",year:"IV",cgpa:"8.1"},{name:"Priya",dep:"IT",year:"IV",cgpa:"9.0"}])

  return (
    <div>
      {/* <StudentInfo/> */}
      {/* {students.map((s,i)=>
      <StudentCard name={s.name} dep={s.dep} year={s.year} cgpa={s.cgpa}/>)} */}
      <AddStudent/>
      
    </div>
  )
}

export default Students
