import React from 'react'
import Nav from './component/Nav'
import { Routes,Route } from 'react-router'
import Hero from './component/Hero'
import About from './component/About'
import Contact from './component/Contact'
import Gallery from './component/Gallery'
import Login from './component/Login'
import Registration from './component/Registration'
import Heropage from './component/Pages/Heropage'
import Aboutpage from './component/Pages/Aboutpage'
import Contactpage from './component/Pages/Contactpage'
import Gallerypage from './component/Pages/Gallerypage'
import Loginpage from './component/Pages/Loginpage'
import Registerpage from './component/Pages/Registerpage'


export default function App() {
  return (
   <Routes>
     <Route path='/' element={<Nav/>}/>
     <Route path='/home' element={<Heropage/>}/>
     <Route path='/about' element={<Aboutpage/>}/>
     <Route path='/contact' element={<Contactpage/>}/>
     <Route path='/gallery' element={<Gallerypage/>}/>
     <Route path='/login' element={<Loginpage/>}/>
     <Route path='/register' element={<Registerpage/>}/>

   </Routes>
  )
}



