import React from 'react'
import Navbar from "../components/Navbar.jsx";

function Home () {
  return (
    <div className='bg-primary'>
      <Navbar />
      <main>
        <section className="bg-white max-w-[1400px] m-auto py-6">
          <img className='max-w-[1200px] m-auto' src="src/assets/images/curtain.jpg" alt="HeroImage" />
        </section>
      </main>
    </div>
  )
}

export default Home
