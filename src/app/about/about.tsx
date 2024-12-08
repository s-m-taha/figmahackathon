import React from 'react'
import AboutHero from '../component/aboutHero'
import AboutSection from '../component/aboutSection'
import AboutPopularProduct from '../component/aboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page