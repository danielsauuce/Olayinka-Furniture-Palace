import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />
      <Hero />
      <Features />
      <About />
    </div>
  );
};

export default Home;
