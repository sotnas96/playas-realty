import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Footer from './components/footer/Footer'
import HeaderContainer from './components/headerContainer/HeaderContainer'
import ServicesContainer from './components/servicesContainer/ServicesContainer'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import Login from './pages/Login'
import AdminPanel from './pages/private/AdminPanel'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { checkTokenAsync } from './store/authSlice'
import Private from './components/ProtectedRoutes/Private'
function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    const token = localStorage.getItem('token');
    if (token) dispatch(checkTokenAsync(token));
  }, [dispatch])
  return (
    <>  
      <HeaderContainer>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/properties/detail/:id' element={<PropertyDetail/>}/>
          <Route path='/aboutUs' element={<Contact/>}/>
          <Route path='/services' element={<ServicesContainer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route element={<Private/>}>
            <Route path='/admin/*' element={<AdminPanel/>}/>
          </Route>

          <Route path='*' element={<div className='bg-white'>Not found</div>}/>
        </Routes>
      </HeaderContainer>
      <Footer/>

    </>
  )
}

export default App
