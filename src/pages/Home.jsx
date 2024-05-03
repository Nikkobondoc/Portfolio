import React, { useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import Arrow from '../components/Arrow';
import Snowfall from 'react-snowfall';
import Typewriter from 'typewriter-effect/dist/core';

const Home = () => {
  const musicNote1 = document.createElement('img');
  musicNote1.src = '/images/music-note.png';
  const musicNote2 = document.createElement('img');
  musicNote2.src = '/images/note.png';
  const musicNote3 = document.createElement('img');
  musicNote3.src = '/images/musical-note.png';

  const images = [musicNote1, musicNote2, musicNote3];

  const ref = useRef();

  useEffect(() => {

    const typewriter = new Typewriter(ref.current, {
      loop: false,

    });
    

    typewriter
  .start()
  .typeString('Nikko Bondoc')
  .pauseFor(9999999)
  .deleteChars(11);

    new Typewriter('#typewriter2', {
      strings: ['Front-End Web Developer', 'Web Designer', 'Spotify Supporter'],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <>
      <header>
      
      </header>
      <body className='home-body'>
        
      <Snowfall
        // Applied to the canvas element
        style={{ position: 'fixed', width: '100vw', height: '100vh' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={150}
        // Pass in the images to be used
        images={images}
        radius={[7.0, 15.0]}
      />
      <div className='front-wrap'>
        <div className='front-left'>
          <h1 ref={ref} id="typewriter" className='header-nikko'>Nikko Bondoc</h1>
          <h1 id="typewriter2" className='header-nikko'></h1>

          {/* <h2 className='job-title'>Front-End Web Developer</h2> */}
        </div>
        <div className='front-right'>
          <img className="hero-image" src="/images/nikko-portfolio-teehee.svg" alt="Male sitting down on a bench listening to music" />
          <Arrow />
        </div>
      </div>
      </body>
    </>
  );
};

export default Home;

