import React from 'react'
import Header from './Components/Header'
import BannerSection from './Components/BannerSection'
// import './App.css'

function App() {

  return (
    <div className='absolute-top-0  w-full'> 
      <Header/>
      <main className='flex-1 max-w[90%] mx-auto'>
      <BannerSection/>

      </main>

    </div>
   
  )
}

export default App
