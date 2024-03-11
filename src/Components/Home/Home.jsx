import React from 'react';
import Banner from './Banner';
import SectionOne from './SectionOne';
import OurServices from './OurServices';
import About from './About';
import WhyUs from './WhyUs';
import Clients from './Clients';
import CEO from './CEO';
import Founders from './Founders';
import WorkSection from './WorkSection';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <SectionOne></SectionOne>
            <About></About>
            <WhyUs></WhyUs>
            <Clients></Clients>
            <CEO></CEO>
            <Founders></Founders>
            <WorkSection></WorkSection>
            <Footer></Footer>


        </div>
    );
};

export default Home;