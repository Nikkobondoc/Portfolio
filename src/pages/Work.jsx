import React, { useEffect, useRef } from 'react';
import Nav from '../components/Nav'
import ArrowtoProfile from '../components/ArrowtoProfile';
import { NavLink } from 'react-router-dom';
import Snowfall from 'react-snowfall';


//iconify
import { Icon } from '@iconify/react';
import Toolkit from '../components/Toolkit';



const Work = () => {



  return (
    <>
    <header>
      
    </header>

    <body className='home-body'>
    <div className='meet-me-btn'>
      <ArrowtoProfile />
      </div>
      <div className="work-wrap">
        <h1 className='work-title'>My Work</h1>

      <div className='project-wrap'>
          <div className="project">

          <img src="/images/Wowies-desktop.PNG" alt="Whack-a-goomba" className='work-image'/>

          <div className='information'>
            <div className='information-bg'>
            </div>
            <div className='information-text'>
            <h3>Wowies</h3>


              <NavLink to ={`/work/1`}><Icon className='icon' icon="material-symbols:arrows-more-up" width="24" height="24" /></NavLink>
              <a href="https://github.com/Nikkobondoc/Movie-Database-Wowies" target="_blank"><Icon className='icon' icon="line-md:github-twotone" width="24" height="24" /></a>
              
              <a href="https://nikkobondoc.com/WOWIES/" target="_blank"><Icon className='icon' icon="fluent:globe-arrow-up-24-regular" width="24" height="24" /></a>

            </div>
          </div>
          </div>
          
          <div className="project">

          <img src="/images/bdw.PNG" alt="Whack-a-goomba" className='work-image'/>

          <div className='information'>
            <div className='information-bg'>
            </div>
            <div className='information-text'>
            <h3>Beloved Duck Wellness</h3>
  

              <NavLink to ={`/work/2`}><Icon className='icon' icon="material-symbols:arrows-more-up" width="24" height="24" /></NavLink>

              <a href="https://github.com/htpwebdesign/bdwmassage-theme" target="_blank"><Icon className='icon' icon="line-md:github-twotone" width="24" height="24" /></a>
              
              <a href="https://bdwmassage.bcitwebdeveloper.ca/" target="_blank"><Icon className='icon' icon="fluent:globe-arrow-up-24-regular" width="24" height="24" /></a>

            </div>
          </div>
          </div>
          <div className="project">

          <img src="/images/Capture.PNG" alt="Whack-a-goomba" className='work-image'/>

          <div className='information'>
            <div className='information-bg'>
            </div>
            <div className='information-text'>
            <h3>Portfolio Project</h3>
  

              <NavLink to ={`/work/3`}><Icon className='icon' icon="material-symbols:arrows-more-up" width="24" height="24" /></NavLink>

              <a href="https://github.com/Nikkobondoc/Portfolio" target="_blank"><Icon className='icon' icon="line-md:github-twotone" width="24" height="24" /></a>
              
              <a href="/" target="_blank"><Icon className='icon' icon="fluent:globe-arrow-up-24-regular" width="24" height="24" /></a>

            </div>
          </div>
          </div>
          <div className="project">

          <img src="/images/Whack-a-gooma.PNG" alt="Whack-a-goomba" className='work-image'/>

          <div className='information'>
            <div className='information-bg'>
            </div>
            <div className='information-text'>
            <h3>Whack a Goomba</h3>
  

              <NavLink to ={`/work/4`}><Icon className='icon' icon="material-symbols:arrows-more-up" width="24" height="24" /></NavLink>

              <a href="https://github.com/Nikkobondoc/Whack-a-Goomba" target="_blank"><Icon className='icon' icon="line-md:github-twotone" width="24" height="24" /></a>
              
              <a href="https://nikkobondoc.com/javascript-game/" target="_blank"><Icon className='icon' icon="fluent:globe-arrow-up-24-regular" width="24" height="24" /></a>

            </div>
          </div>
          </div>
         </div>    

      </div>
      <div className='toolkit'>
        <Toolkit />
      </div>

    </body>
    </>
  )
}

export default Work