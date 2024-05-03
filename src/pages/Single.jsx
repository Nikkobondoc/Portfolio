import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Work from '../data/Work.json';
import { Icon } from '@iconify/react';
import Isotope from 'isotope-layout';

const Single = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const project = Work.work;

  useEffect(() => {
    setData(project.find(el => el.id === id));
  }, [id, project]);

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('.about'); // Default filter key set to '.learn'
  const portfolioRef = useRef(null);

  useEffect(() => {
    if (!isotope && portfolioRef.current) {
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

  useEffect(() => {
    if (isotope && filterKey) {
      isotope.arrange({ filter: filterKey });
    }
  }, [isotope, filterKey]);

  const handleFilter = (key) => {
    setFilterKey(key);
  };

  return (
    <div className='single-wrap'>
      {data ? (
        <>
          <div className='single-top'>
            <h1>{data.title}</h1>
            <img className='image-single' src={`/images/${data.image}`} alt="" />
          </div>
          <div className='tools'>
            <h2>Links</h2>
            <a href={data.livesite} target="_blank" rel="noopener noreferrer">
              <Icon className='icon' icon="fluent:globe-arrow-up-24-regular" width="24" height="24" />
            </a>

            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <Icon className='icon' icon="line-md:github-twotone" width="24" height="24" />
            </a>
            <h2>Tools Used</h2>

            <p>{data.tools && data.tools.map(el => <Icon icon={el} width="24" height="24" />)}</p>
          </div>
          <div className='info-single'>
            {/* <p>{data.learned}</p> */}
          </div>
        </>
      ) : (
        <p>Project not found</p>
      )}

      <div className='tool-kit-whole-single'>
        <div className='button-wrap'>
          <button onClick={() => handleFilter('.about')} className='toolkit-btn'>About</button>
          <button onClick={() => handleFilter('.learn')} className='toolkit-btn'>What I Learned</button>
        </div>

        <div ref={portfolioRef} className="portfolio-list">
          <div className="portfolio-item about">{data && <p>{data.about}</p>}</div>
          <div className="portfolio-item learn">{data && <p>{data.learned}</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Single;

