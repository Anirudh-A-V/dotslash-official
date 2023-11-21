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

const inter = Inter({ subsets: ["latin"] });

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
      
      <Sponsors />
      <Footer /> */}
   </main>
    );
}
