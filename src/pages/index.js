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

import {workshopData,preEventData,competitionData,informalsData} from "../assets/data/data.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start w-full ${inter.className}`}
    >
      <Navbar />
      <Hero />
      <About />
      
      {workshopData.length ? <Events eventData={workshopData} sectionTitle="WORKSHOPS" /> : null}
      {preEventData.length ? <Events eventData={preEventData} sectionTitle="PRE EVENTS" /> : null}
      {competitionData.length ? <Events eventData={competitionData} sectionTitle="COMPETITIONS" /> : null}
      {informalsData.length ? <Events eventData={informalsData} sectionTitle="INFORMALS" /> : null}
      
      
      
      {/* 
      
      <Sponsors />
      <Footer /> */}
    </main>
  )
}
