import React from 'react'
import Image from "next/image"
import localFont from 'next/font/local'

const PPNeueMachinaFont = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMachina-Light.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})



const Hero = () => {
  return (
    <div className='flex relative justify-center items-center flex-col w-full h-screen'>
      <div className='w-full lg:min-w-[768px] flex justify-center items-center flex-col'>
        <Image src='/hero-logo.svg' alt='hero' width={700} height={128} style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }} />
        <h2 className={`text-white font-normal text-[12px] lg:text-[16px] leading-normal tracking-[0.6em] lg:tracking-[1em] px-1 ml-2 mt-4 ${PPNeueMachinaFont.className}`}>ANNUAL TECHNO-CULTURAL FEST</h2>
      </div>
      <div className='absolute inset-0 w-full h-full flex justify-center items-center'>
        <video className='-z-10 w-full h-1/3 lg:w-1/2 lg:h-1/2 object-cover' autoPlay loop muted>
          <source src='/videos/loop.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  )
}

export default Hero