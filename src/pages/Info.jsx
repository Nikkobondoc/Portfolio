import React from 'react';
import Nav from '../components/Nav';
import { Icon } from '@iconify/react';

const Info = () => {
  return (
    <>
      <header>
        
      </header>
        <div className='header'>
          <h2>Alittle About me</h2>
        </div>
      <div className='info-wrapper'>
      <div className='right-side'>
          <div className='image'>
            <img className="headshot" src="/images/Nikko_2957.jpg" alt="Nikko Bondoc" loading='lazy' />
          </div>
        </div>
        <div className='left-side'>
          <div className='about-me'>
            <p className='about-text'>Hello! I'm Nikko Bondoc, a proud graduate from BCIT's Front-End Web Development program in Vancouver. My passion lies in crafting immersive digital experiences through code. When I'm not typing away, you'll often find me pounding the pavement on a run or cycling through scenic trails. Music is my constant companion, fueling my creativity as I delve into new coding challenges. I also have a knack for collecting clothing, always on the lookout for unique pieces that express my style. Join me on this journey as I blend technology with creativity to build captivating online worlds</p>
          </div>
          <div className='spotify'>
            <h3>Listen In With Me! </h3>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/3GmLIts7VJDAXvoq80le0U?utm_source=generator"
              width="100%"
              height="352"
              frameBorder=""
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
        
          </div>
          <div className='contact'>

            <a href="https://www.linkedin.com/in/nikko-bondoc/" target="_blank" rel="noopener noreferrer">
              <Icon className='icon' icon="line-md:linkedin" width="24" height="24" />
            </a>

            <a href="https://github.com/Nikkobondoc" target="_blank" rel="noopener noreferrer">
              <Icon className='icon' icon="line-md:github-twotone" width="24" height="24" />
            </a>

            <a href="mailto:Nikkobondoc1120@gmail.com">
              <Icon className='icon' icon="line-md:email-twotone" width="24" height="24" />
            </a>

          </div>
        </div>

      </div>
    </>
  );
};

export default Info;
