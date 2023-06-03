import React, { useState } from 'react'

const Login = (props) => {

  const[username , setUsername] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log(username)
    props.setUser(username)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Please Login' onChange={(e) => 
          setUsername(e.target.value)
        }></input>
        <button type='submit'>LOG IN</button>
      </form>
      
    </div>
  )
}

export default Login