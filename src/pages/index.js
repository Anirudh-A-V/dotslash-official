import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";

import About from "@/components/About";
import Events from "@/components/Events";
import Statistics from "@/components/Statistics.jsx";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sponsors from "@/components/Sponsors";

import { workshopData, preEventData, competitionData, informalsData, dotslashJuniorData } from "../assets/data/data.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>DotSlash '23</title>
        <meta name="description" content="This is the official website of DotSlash CET 2023." />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-96CQYSH4G1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-96CQYSH4G1');
        `}
      </Script>
      <main
        className={`flex min-h-screen flex-col items-center justify-start w-full ${inter.className}`}
      >
        <Navbar />
        <Hero />
        {/* <Featured /> */}
        <About />
        {preEventData.length > 0 && <Events eventData={preEventData} sectionTitle="PRE EVENTS" id="pre-events" />}
        <Statistics />
        {dotslashJuniorData.length > 0 && <Events eventData={dotslashJuniorData} sectionTitle="DOTSLASH FOR JUNIORS" id="juniors" />}
        {workshopData.length > 0 && <Events eventData={workshopData} sectionTitle="WORKSHOPS" id="workshops" />}
        {competitionData.length > 0 && <Events eventData={competitionData} sectionTitle="COMPETITIONS" id="competitions" />}
        {informalsData.length > 0 && <Events eventData={informalsData} sectionTitle="INFORMALS" id="informals" />}
        {/* <Sponsors />  */}
        <Footer />
      </main>
    </>
  );
}
