import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Header from './redux/api/Header'

function App() {
  return (
    <>
      <Header/>
      <div className='flex items-center gap-[50px] justify-center mt-[40px] mb-[40px]'>
        <Link className='text-2xl' to={"/login"}>Users</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
