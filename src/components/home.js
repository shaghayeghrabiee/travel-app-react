import React from 'react';
import Cards from './Cards';
import HeroSection from './heroSection';
import Footer from './Footer';
 

const Home = () => {
    return (<div>
        <HeroSection/>
        <Cards/>
        <Footer/>
    </div>  );
}
 
export default Home;