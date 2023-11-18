import React from 'react'
import Image from "next/image"

// import "@/styles/hero.css"



const Hero = () => {
  return (
    <div className="hero">

      <div className="hero_sub">

        <div className="hero_logo_section">

          <img src="/logo_hero.png" alt="image" />
          <h3>COMING SOON</h3>

        </div>

        <h1 className="hero_caption">Legacy is back</h1>

        <div className="about">
          <h3>ABOUT THE EVENT</h3>
          <p>
            <b>Dotslash</b> is the annual technical event held by department of computer science & engineering, college of engineering trivandrum
          </p>
       
       
        </div>
      </div>


    </div>
  )
}

export default Hero