import React from 'react';
import galaxyshape from '../../assets/galaxy-shape-1.png';
import zeldafairies from "../../assets/zelda-fairies-1.png";

//import {BsGithub} from 'react-icons/fa';

import './home.css';

export const Home = () => {
  return (
    <section className='home' id='home'>
    <div className='home__container container'>
      <p className='home__subtitle text-cs'>
        What's up? <span>I am</span>
      </p>

      
  <h1 className='home__title text-cs'>
    <span>Josias</span> Chevalier
  </h1>

  <p className='home__job'>
        <span className='text-cs'>I'm an aspiring</span> <b>full stack Software Engineer</b>
      </p>

      <p className='home__text'>
        Originally from the Dominican Republic. I am currently a computer science senior
        at Florida International University. 
      </p>

      <div className="home__btns">
            <a href="" className="btn">Download CV</a>

            <a href="" className="hero__link">My Skills</a>
      
</div>
</div>
</section>
  );
};

export default Home;