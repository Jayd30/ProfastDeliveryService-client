import React, { useEffect } from 'react';

import benifits1 from '../../../assets/rest/live-tracking.png';
import benifits2 from '../../../assets/rest/safe-delivery.png';
import benifits3 from '../../../assets/rest/safe-delivery.png';
import AOS from 'aos'
import 'aos/dist/aos.css';
const Benifits = () => {
    
    AOS.init();
 
  const benefitsData = [
    {
      id: 1,
      image: benifits1,
      title: 'Live Parcel Tracking',
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      image: benifits2,
      title: '100% Safe Delivery',
      description:
        'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    },
    {
      id: 3,
      image: benifits3,
      title: '24/7 Call Center Support',
      description:
        'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    },
  ];

  return (
    <section className="bg-base-200 py-16 px-4 md:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto space-y-8">

        {benefitsData.map((item) => (
          <div
            key={item.id} data-aos="zoom-in" data-aos-duration="1000"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">

              {/* Image */}
              <div className="lg:w-1/4 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 md:w-52 object-contain"
                />
              </div>

              {/* Divider */}
              <div className="hidden lg:block h-32 border-l border-dashed border-gray-300"></div>

              {/* Content */}
              <div className="lg:w-3/4 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-teal-900 mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-8">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Benifits;