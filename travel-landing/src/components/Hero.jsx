
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-screen text-white relative" style={{ backgroundImage: `url('/assets/images/hero.jpg')` }}>
      <div className="bg-black/60 absolute inset-0" />
      <div className="relative z-10 flex items-center justify-center h-full flex-col text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-xl mb-6">Book your dream vacation now</p>
        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
