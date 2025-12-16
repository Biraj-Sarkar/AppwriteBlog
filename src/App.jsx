import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import authService from './appwrite/auth';
import { login, logout } from "./store/authSlice";
import { Header, Footer } from './components'
import { Outlet } from "react-router";
// import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const userData = await authService.getCurrentUser()
      if (userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout(userData))
      }
      setLoading(false)
    })()
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full bloack'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
