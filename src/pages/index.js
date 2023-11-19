import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Featured from '@/components/Featured'
import PreEvents from '@/components/PreEvents'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import Footer from '@/components/Footer'
import About from '@/components/About'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mainContent, setMainContent] = useState(false)
  return (
    <div className='relative overflow-hidden'>
      <div className='flex relative justify-center items-center flex-col w-full h-screen'>
        <div className='absolute inset-0 w-full h-full flex justify-center items-center'>
          <video className='w-full h-full object-cover' autoPlay muted
            onEnded={() => setMainContent(true)}
          >
            <source src='/videos/full.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      <main
        className={`flex slide-content min-h-screen flex-col items-center justify-start w-full ${mainContent ? 'slide-in' : 'slide-out'}`}
      >

        <Navbar />
        <Hero />
        <About />
        {/* <Featured />
        <PreEvents />
        <Events />
        <Sponsors />
        <Footer /> */}
      </main>
    </div>
  )
}
