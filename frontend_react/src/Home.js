import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';

const Home = () => {
  return (
    <div className="app">
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home