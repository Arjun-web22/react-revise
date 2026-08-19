import React, { useEffect, useState } from 'react'

function ApiPractice() {
  
    const [users,setUser]=useState([]);

    const [loading,setLoading]=useState(true);

    const [error,setError]=useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .catch(err=>{
            setError("Failed to load users")
            })
        .then(data=>{setUser(data);
        
            setLoading(false);
        })
    },[])

  return (
    <div>
        <h1>Users</h1>
        {loading?(
            <p>Loading users...</p>
        ):(
        users.map(user=>(
        <div key={user.id} className='text-white bg-slate-900 rounded w-fit flex flex-col gap-2 mt-2 px-2 py-2'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>))
        )}
        
    </div>
  )
}

export default ApiPractice
