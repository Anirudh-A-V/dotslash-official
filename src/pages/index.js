import About from "@/components/About";
import Events from "@/components/Events";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PreEvents from "@/components/PreEvents";
import Sponsors from "@/components/Sponsors";
import { Inter } from "next/font/google";
import Image from "next/image";


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
      <Events />
      {/* <Featured />

      <PreEvents />
      
      {workshopData.length ? <Events eventData={workshopData} sectionTitle="WORKSHOPS" /> : null}
      {preEventData.length ? <Events eventData={preEventData} sectionTitle="PRE EVENTS" /> : null}
      {competitionData.length ? <Events eventData={competitionData} sectionTitle="COMPETITIONS" /> : null}
      {informalsData.length ? <Events eventData={informalsData} sectionTitle="INFORMALS" /> : null}
      
      
      
      {/* 
      
      <Sponsors />
      <Footer /> */}
   </main>
    );
}
