import React, { useEffect, useRef } from 'react';
import Nav from '../components/Nav'
import ArrowtoProfile from '../components/ArrowtoProfile';
import { NavLink } from 'react-router-dom';
import Snowfall from 'react-snowfall';


//iconify
import { Icon } from '@iconify/react';
import Toolkit from '../components/Toolkit';



const Work = () => {

  // const musicNote1 = document.createElement('img');
  // musicNote1.src = '/images/music-note.png';
  // const musicNote2 = document.createElement('img');
  // musicNote2.src = '/images/note.png';
  // const musicNote3 = document.createElement('img');
  // musicNote3.src = '/images/musical-note.png';

  // const images = [musicNote1, musicNote2, musicNote3];

  // const ref = useRef();

  return (
    <>
    <header>
      
    </header>
          {/* <Snowfall
        // Applied to the canvas element
        style={{ position: 'fixed', width: '100vw', height: '100vh' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={150}
        // Pass in the images to be used
        images={images}
        radius={[7.0, 15.0]}
      /> */}
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
              {/* <p className='goomba-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere consequatur sapiente, ut adipisci nostrum. Laborum sunt repellendus incidunt explicabo quisquam quis, dicta dolorum. Modi optio voluptatem sit illo praesentium laborum exercitationem natus rerum quidem. Nisi itaque earum inventore deleniti alias voluptates consequuntur quae quis!</p> */}

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
              {/* <p className='goomba-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere consequatur sapiente, ut adipisci nostrum. Laborum sunt repellendus incidunt explicabo quisquam quis, dicta dolorum. Modi optio voluptatem sit illo praesentium laborum exercitationem natus rerum quidem. Nisi itaque earum inventore deleniti alias voluptates consequuntur quae quis!</p> */}

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
              {/* <p className='goomba-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere consequatur sapiente, ut adipisci nostrum. Laborum sunt repellendus incidunt explicabo quisquam quis, dicta dolorum. Modi optio voluptatem sit illo praesentium laborum exercitationem natus rerum quidem. Nisi itaque earum inventore deleniti alias voluptates consequuntur quae quis!</p> */}

              <NavLink to ={`/work/3`}><Icon className='icon' icon="material-symbols:arrows-more-up" width="24" height="24" /></NavLink>

              <a href="/" target="_blank"><Icon className='icon' icon="line-md:github-twotone" width="24" height="24" /></a>
              
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
              {/* <p className='goomba-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere consequatur sapiente, ut adipisci nostrum. Laborum sunt repellendus incidunt explicabo quisquam quis, dicta dolorum. Modi optio voluptatem sit illo praesentium laborum exercitationem natus rerum quidem. Nisi itaque earum inventore deleniti alias voluptates consequuntur quae quis!</p> */}

              <NavLink to ={`/work/4`}><Icon className='icon' icon="material-symbols:arrows-more-up" width="24" height="24" /></NavLink>

              <a href="https://github.com/Nikkobondoc/Movie-Database-Wowies" target="_blank"><Icon className='icon' icon="line-md:github-twotone" width="24" height="24" /></a>
              
              <a href="https://bdwmassage.bcitwebdeveloper.ca/" target="_blank"><Icon className='icon' icon="fluent:globe-arrow-up-24-regular" width="24" height="24" /></a>

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