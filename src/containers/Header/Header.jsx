import React, { Suspense } from 'react'
import './header.css';


import Typical from 'react-typical'
import {Canvas} from '@react-three/fiber';
import World from '../../components/World';
import { OrbitControls } from '@react-three/drei';



const Header = () => {
  return (
    <>
  
    <div className='modern__header section__padding ' id='home'>
     
      <div className='modern__header-content'>
        
        <h1 className='gradient__text'> <Typical
        steps={['Hi, I am Besir Kurtishi', 3000, 'I\'m a Frontend Developer.', 1000, 'I also Like animations.', 1000, 'And I also like ThreeJs', 1000]}
        loop={Infinity}
        wrapper="h1"
      /> </h1>
        <p>I'm a Frontend Software Developer with a strong passion for building web applications with great user experiences</p>
        
        
      </div>  
      
          <Canvas className='modern__header-image'>
          <OrbitControls enableZoom={false} panSpeed={2} />
          
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Suspense fallback={null} >
          <World />
          </Suspense>
         
          </Canvas>
      
    </div>

    </>
  )
}

export default Header