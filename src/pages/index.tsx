import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Register from './register/Register'
import Login from './login/Login'

const index = () => {
  return (
    <div className='container bg-red-400'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default index