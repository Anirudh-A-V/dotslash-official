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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start w-full ${inter.className}`}
    >
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <PreEvents />
      <Events />
      <Sponsors />
      <Footer />
    </main>
  )
}
