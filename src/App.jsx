import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Seller from './components/Seller'
import Creators from './components/Creators'
import Contact from './components/Contact'
import Pricing from './components/Pricing'

function App() {


  return (
    <>


      <div className='w-[100%] overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/seller' element={<Seller />} />
          <Route path='/creators' element={<Creators />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
        <Footer />
      </div>


    </>
  )
}

export default App
