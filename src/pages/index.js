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

import { getAllActiveEvents } from "@/utils/sanity.js";

const inter = Inter({ subsets: ['latin'] })

export default function Home({ eventData }) {

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
        {eventData.preEventData && eventData.preEventData.length > 0 && <Events eventData={eventData.preEventData} sectionTitle="PRE EVENTS" id="pre-events" />}
        <Statistics />
        {eventData.dotslashJuniorData && eventData.dotslashJuniorData.length > 0 && <Events eventData={eventData.dotslashJuniorData} sectionTitle="DOTSLASH FOR JUNIORS" id="juniors" />}
        {eventData.workshopData && eventData.workshopData.length > 0 && <Events eventData={eventData.workshopData} sectionTitle="WORKSHOPS" id="workshops" />}
        {eventData.competitionData && eventData.competitionData.length > 0 && <Events eventData={eventData.competitionData} sectionTitle="COMPETITIONS" id="competitions" />}
        {eventData.informalsData && eventData.informalsData.length > 0 && <Events eventData={eventData.informalsData} sectionTitle="INFORMALS" id="informals" />}
        {/* <Sponsors />  */}
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const eventData = await getAllActiveEvents();
  console.log("Event Data", eventData);
  return {
    props: { eventData },
  };
}