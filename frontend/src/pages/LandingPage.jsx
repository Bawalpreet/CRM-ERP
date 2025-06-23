import React, { useState } from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';


const LandingPage = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
  return (
    <div className='min-h-screen bg-white'>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />    
        <Hero/>          
    </div>
  )
}

export default LandingPage
