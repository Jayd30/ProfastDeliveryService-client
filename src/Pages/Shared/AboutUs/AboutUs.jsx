import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-slate-900 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">

      <div
        data-aos="zoom-in"
        data-aos-duration="1800"
        className="max-w-7xl mx-auto bg-gradient-to-r from-cyan-900 via-slate-800 to-slate-900 rounded-[40px] p-10 md:p-16 shadow-2xl border border-white/10 hover:scale-[1.02] transition-all duration-500"
      >

        {/* Heading */}
        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hover:text-cyan-400 transition-all duration-500">
            About ProFast
          </h1>

          <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
            ProFast Delivery Service is dedicated to providing fast, secure,
            and reliable courier solutions for businesses and individuals.
            We combine modern technology, real-time tracking, and professional
            logistics support to ensure every parcel reaches its destination
            safely and on time.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-cyan-500/20 hover:-translate-y-3 hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-500 group"
          >

            <div className="text-5xl mb-5 group-hover:scale-125 transition-all duration-500">
              🚚
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-all duration-500">
              Fast Delivery
            </h2>

            <p className="text-gray-300 leading-7">
              Our optimized delivery network ensures quick and efficient parcel
              delivery across cities with complete reliability.
            </p>

          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-lime-500/20 hover:-translate-y-3 hover:shadow-lime-400/30 hover:shadow-2xl transition-all duration-500 group"
          >

            <div className="text-5xl mb-5 group-hover:scale-125 transition-all duration-500">
              📦
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-300 transition-all duration-500">
              Secure Packaging
            </h2>

            <p className="text-gray-300 leading-7">
              We maintain the highest safety standards to ensure every shipment
              is protected and delivered damage-free.
            </p>

          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-orange-500/20 hover:-translate-y-3 hover:shadow-orange-400/30 hover:shadow-2xl transition-all duration-500 group"
          >

            <div className="text-5xl mb-5 group-hover:scale-125 transition-all duration-500">
              🌍
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-all duration-500">
              Nationwide Coverage
            </h2>

            <p className="text-gray-300 leading-7">
              ProFast connects customers nationwide with a trusted logistics
              network designed for speed and convenience.
            </p>

          </div>

        </div>

        {/* Bottom Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="mt-14 text-center"
        >

          <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:scale-110 transition-all duration-500">
            Explore Our Services
          </button>

        </div>

      </div>

    </section>
  );
};

export default AboutUs;