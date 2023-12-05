import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  const { setUser } = useContext(UserContext)

  const handleSubmit = () => {
    setUser(userData);
  }

  return (
    <div>
      <h2>Login</h2>

      <input type='text' placeholder='username'
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />

      <input type='password' placeholder='password'
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login