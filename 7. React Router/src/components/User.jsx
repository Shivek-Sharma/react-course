import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()

  return (
    <div className="text-center font-bold text-2xl my-20">User: {userid}</div>
  )
}

export default User