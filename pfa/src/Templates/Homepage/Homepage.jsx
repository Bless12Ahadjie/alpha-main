import React from 'react'
import HomeNav from '../../molecules/HomeNav';
import HomeContent from '../../organisms/HomeContent';

const Homepage = ()  => {
  return (
    <div style={{overflow:'hidden'}}>
        <HomeNav/>
        <HomeContent/>
        
    </div>

  )
}
 
export default Homepage;