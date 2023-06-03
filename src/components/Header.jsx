import React from 'react'

const Header = ({user , setUser}) => {
  return (
    <div>
      <span>Hi {user}</span>
      <button type='submit' onClick={()=> setUser('')}>LOG OUT</button>
    </div>
  )
}

export default Header