import React, { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import ReactIsotope from 'react-isotope';
import { Icon } from '@iconify/react';



const Toolkit = () => {
  const [isotope, setIsotope] = useState(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    if (!isotope) {
      const iso = new Isotope(portfolioRef.current, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
      });
      setIsotope(iso);
    }

    return () => {
      if (isotope) {
        isotope.destroy();
        setIsotope(null);
      }
    };
  }, [isotope]);

  const filterItems = (filterKey) => {
    if (isotope) {
      isotope.arrange({ filter: filterKey });
    }
  };

  return (
    <div className='tool-kit-whole'>
      <div className='button-wrap'>

      <button onClick={() => filterItems('*')} className='toolkit-btn'>All</button>
      <button onClick={() => filterItems('.favorites')} className='toolkit-btn'>Favorites</button>
      <button onClick={() => filterItems('.development')} className='toolkit-btn' >Development</button>
      <button onClick={() => filterItems('.design')} className='toolkit-btn'>Design</button>
      </div>

      <div ref={portfolioRef} className="portfolio-list">
        {/* Your portfolio items go here */}
        <div className="portfolio-item favorites development"><Icon className='icon-tool' icon="devicon:html5-wordmark" width="24" height="24" />HTML5</div>
        <div className="portfolio-item favorites development"><Icon className='icon-tool' icon="logos:css-3" width="24" height="24" />CSS 3</div>
        <div className="portfolio-item favorites development"><Icon className='icon-tool' icon="logos:react" width="24" height="24" />React</div>
        <div className="portfolio-item design"><Icon className='icon-tool' icon="skill-icons:illustrator" width="24" height="24" />Illustrator</div>
        <div className="portfolio-item favorites development"><Icon className='icon-tool' icon="openmoji:javascript" width="24" height="24" />Javascript</div>
        <div className="portfolio-item development"><Icon className='icon-tool' icon="devicon:jquery" width="24" height="24" />Jquery</div>
        <div className="portfolio-item design"><Icon className='icon-tool' icon="devicon:photoshop" width="24" height="24" />Photoshop</div>
        <div className="portfolio-item development"><Icon className='icon-tool' icon="devicon:php" width="24" height="24" />PHP</div>
        <div className="portfolio-item development"><Icon className='icon-tool' icon="logos:sass" width="24" height="24" />Sass</div>
        <div className="portfolio-item development"><Icon className='icon-tool' icon="logos:shopify" width="24" height="24" />Shopify</div>
        <div className="portfolio-item development"><Icon className='icon-tool' icon="logos:mysql" width="24" height="24" />MySQL</div>
        <div className="portfolio-item favorites development"><Icon className='icon-tool' icon="devicon:woocommerce" width="24" height="24" />Woocommerce</div>
        <div className="portfolio-item favorites development"><Icon className='icon-tool' icon="mdi:wordpress" width="24" height="24" />Wordpress</div>
        <div className="portfolio-item design"><Icon className='icon-tool' icon="devicon:xd" width="24" height="24" />xd</div>
        <div className="portfolio-item favorites design"><Icon className='icon-tool' icon="devicon:figma" width="24" height="24" />Figma</div>

        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default Toolkit;

