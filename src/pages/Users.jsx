import React, { useEffect, useState } from 'react'

const Users = () => {
    const [data , setData] = useState([])

    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users" , {
            method: "GET"
        })
        const result = await response.json()
        
        setData(result)
    }

    useEffect(() => {
        getUsers()
    } , [])

  return (
    <div>
      {data.map((el) => {
        return (
            <div key={el.id} >
            <h1 >{el.name}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default Users
