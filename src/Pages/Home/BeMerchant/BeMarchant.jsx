import React from "react";
import merchantlogo from "../../../assets/rest/location-merchant.png";
import bgImage from '../../../assets/rest/be-a-merchant-bg.png'
const BeMarchant = () => {
  return (
    <div data-aos="zoom-in"data-aos-duration="1000"
      className="relative overflow-hidden rounded-[32px] max-w-7xl mx-auto px-8 md:px-16 py-12"
      style={{
        background: `
          radial-gradient(circle at top center, rgba(120,255,255,0.18), transparent 30%),
          linear-gradient(135deg, #003B49 0%, #003B49 40%, #003540 100%),
           url(${bgImage})
        `,
         backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  
      }}
    >
      {/* Top Glow Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-40">
        {/* <svg
          viewBox="0 0 1440 320"
          className="w-full h-[140px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128"
            stroke="#7FFFD4"
            strokeWidth="2"
          />
          <path
            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,74.7C1120,53,1280,43,1360,53.3L1440,64"
            stroke="#9FFFE0"
            strokeWidth="2"
          />
        </svg> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Side */}
        <div className="max-w-xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Merchant and Customer Satisfaction
            <br />
            is Our First Priority
          </h1>

          <p className="text-sm md:text-base text-gray-200 leading-7 mb-8">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-lime-300 hover:bg-lime-400 text-black font-semibold px-7 py-3 rounded-full transition duration-300">
              Become a Merchant
            </button>

            <button className="border border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-black font-semibold px-7 py-3 rounded-full transition duration-300">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={merchantlogo}
            alt="Merchant"
            className="w-[260px] md:w-[360px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BeMarchant;