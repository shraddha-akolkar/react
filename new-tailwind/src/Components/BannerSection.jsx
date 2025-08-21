import React from 'react'
import Hero from '../assets/hero.png'

const BannerSection = () => {
  return (
    <section className='min-h-screen flex items-center px-6 md:px-12 lg:px-20'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10 w-full'>
        
        
        <div className='flex-1 space-y-6 text-center lg:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'>
            <span>
              <strong className='text-[#0004ff]'>Summarize</strong> Your
            </span>
            <br />
            <span>Notes in Seconds</span>
          </h1>

          <p className='text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0'>
            Effortlessly condense your study material and save time for what matters most.
          </p>

          <button className='bg-[#0004ff] text-white px-6 py-3 rounded-xl text-sm sm:text-base  '>
            Summarize my notes
          </button>
        </div>

      
        <div className='flex-1 flex justify-center'>
          <img src={Hero} alt="hero banner" loading='eager' className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default BannerSection
