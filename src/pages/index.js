import Image from "next/image";
import { Inter } from "next/font/google";

import About from "@/components/About";
import Events from "@/components/Events";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";


import { workshopData, preEventData, competitionData, informalsData } from "../assets/data/data.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start w-full ${inter.className}`}
    >
      <Navbar />
      <Hero />
      <About />
      {/* <Events /> */}
      {workshopData.length > 0 && <Events eventData={workshopData} sectionTitle="WORKSHOPS" />}
      {preEventData.length > 0 && <Events eventData={preEventData} sectionTitle="PRE EVENTS" />}
      {competitionData.length > 0 && <Events eventData={competitionData} sectionTitle="COMPETITIONS" />}
      {informalsData.length > 0 && <Events eventData={informalsData} sectionTitle="INFORMALS" />}

      {/* <Featured />

      <PreEvents />
      
      
      <Sponsors />
      <Footer /> */}
    </main>
  );
}
