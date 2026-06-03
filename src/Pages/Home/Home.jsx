import React from 'react';
import Banner from './Banner/Banner';
import Servicesection from './serviceSection/Servicesection';

import Benifits from './serviceSection/Benifits';
import BeMarchant from './BeMerchant/BeMarchant';
import HowWorks from './HowWorks/HowWorks';
import Faq from './FAQ/Faq';
import TestimonialSection from './TestimonialSection/TestimonialSection';
import Clientservice from './serviceSection/Clientservice';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowWorks></HowWorks>
           <Servicesection></Servicesection>
         <Clientservice></Clientservice>
           <Benifits></Benifits>
           <BeMarchant></BeMarchant>
           <TestimonialSection></TestimonialSection>
           <Faq></Faq>
        </div>
    );
};

export default Home;