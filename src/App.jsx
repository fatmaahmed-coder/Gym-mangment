import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={ <Login />}/>
        <Route path='/dashboard' element={ <Dashboard />}/>
       
      </Routes>
      
    </>

  )
}

export default App
