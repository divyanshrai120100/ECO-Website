import React from 'react';
import Typewriter from "typewriter-effect";
import './App.css';

const Homepage = () => {
  return (
    <section className='showcase' id="home">
      <div className='showcase-overlay'>
          <div className='Type'>
            <Typewriter
                onInit={(typewriter)=> {
                typewriter
                .typeString("From Ideas to Innovation!")    
                .pauseFor(1000)
                .deleteAll()
                .typeString("ACES - Association of Computer Engineering Students")
                .start();
                }}
                />
            </div>
            <a href='#about'>
            <button type="button" class="btn btn-dark btn-lg" data-aos="zoom-in"  data-aos-duration="1200">Explore &#128640;</button>
            </a>
        </div>
    </section>
  )
}
export default Homepage