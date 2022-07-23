import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import Particle from '../../components/particle';
const Header = () => {
  return (
    <>
  
    <div className='modern__header section__padding ' id='home'>
    <Particle />
      <div className='modern__header-content'>
        <h1 className='gradient__text'>Explore our new powerful AI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, inventore debitis? Odit perspiciatis sequi maiores molestias saepe ab doloremque blanditiis est nisi tempore. Aperiam magni vel vero explicabo possimus ipsam.</p>
        <div className='modern__header-content__input'>
          <input type="email" placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='modern__header-content__people'>
          <img src={people} alt="people" />
          <p>2000 people requested access</p>
        </div>
      </div>  
      <div className='modern__header-image'>
          <img src={ai} alt="ai" />
      </div>
    </div>

    </>
  )
}

export default Header