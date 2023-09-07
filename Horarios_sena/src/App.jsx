
import { useState } from 'react'
import './App.css'
import { Contenedor } from './components/Contenedor/Contenedor'
import { Login } from './components/Login/Login'


const App = () => {

  const [loggedIn, setLoggedIn] = useState (false)

  const handelClick = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <>
      <div className='Container'>
        {loggedIn ? <Contenedor /> : <Login onClick={handelClick} />}
      </div>
    </>
  )
}

export default App
