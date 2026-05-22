import React from 'react';

const Service = () => {
  return (
    <section className="bg-slate-900 py-20 px-4 md:px-10 lg:px-20 overflow-hidden">

      <div
        data-aos="zoom-in"
        data-aos-duration="1800"
        className="
          max-w-7xl 
          mx-auto 
          bg-gradient-to-r 
          from-slate-900 
          via-slate-800 
          to-cyan-900
          rounded-[35px] 
          md:rounded-[45px]
          p-6 
          sm:p-8 
          md:p-12 
          lg:p-16
          shadow-2xl 
          border 
          border-white/10 
          hover:scale-[1.01] 
          transition-all 
          duration-500
        "
      >

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
          >

            <h1 className="
              text-4xl 
              sm:text-5xl 
              lg:text-6xl 
              font-extrabold 
              text-white 
              leading-tight
              mb-7
            ">
              About
              <span className="text-cyan-400"> ProFast</span>
            </h1>

            <p className="
              text-gray-300 
              leading-8 
              text-base 
              md:text-lg
              mb-8
            ">
              ProFast Delivery Service provides secure, fast, and reliable
              parcel delivery solutions for individuals and businesses.
              We combine modern logistics technology, real-time parcel tracking,
              and professional support to deliver every package safely and on time.
            </p>

            {/* FEATURES */}
            <div className="space-y-5">

              <div className="
                flex 
                items-start 
                gap-4 
                bg-white/5 
                p-4 
                rounded-2xl 
                hover:bg-cyan-500/10 
                transition-all 
                duration-500
              ">

                <div className="text-3xl">
                  🚚
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Fast & Reliable
                  </h3>

                  <p className="text-gray-300 leading-7">
                    Quick delivery with optimized parcel routes and real-time updates.
                  </p>
                </div>

              </div>

              <div className="
                flex 
                items-start 
                gap-4 
                bg-white/5 
                p-4 
                rounded-2xl 
                hover:bg-lime-500/10 
                transition-all 
                duration-500
              ">

                <div className="text-3xl">
                  📦
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Secure Packaging
                  </h3>

                  <p className="text-gray-300 leading-7">
                    Every shipment is handled carefully to ensure safe delivery.
                  </p>
                </div>

              </div>

              <div className="
                flex 
                items-start 
                gap-4 
                bg-white/5 
                p-4 
                rounded-2xl 
                hover:bg-orange-500/10 
                transition-all 
                duration-500
              ">

                <div className="text-3xl">
                  🌍
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Nationwide Coverage
                  </h3>

                  <p className="text-gray-300 leading-7">
                    We connect customers with delivery services across the country.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE SECTION */}
          <div
            data-aos="fade-left"
            data-aos-duration="1800"
            className="relative"
          >

            <div className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-white/10
              shadow-2xl
              group
            ">

              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                alt="delivery"
                className="
                  w-full
                  h-[300px]
                  sm:h-[400px]
                  md:h-[500px]
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute 
                inset-0 
                bg-gradient-to-t 
                from-black/70 
                via-black/20 
                to-transparent
              "></div>

              {/* FLOATING CARD */}
              <div className="
                absolute
                bottom-6
                left-6
                right-6
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-5
                shadow-2xl
              ">

                <h2 className="
                  text-2xl 
                  font-bold 
                  text-white 
                  mb-2
                ">
                  Trusted Logistics Partner
                </h2>

                <p className="
                  text-gray-300 
                  leading-7
                ">
                  Delivering thousands of parcels daily with speed,
                  safety, and customer satisfaction.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BUTTON */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center mt-16"
        >

          <button className="
            px-10
            py-4
            rounded-full
            bg-cyan-400
            hover:bg-cyan-300
            text-black
            font-bold
            text-lg
            shadow-lg
            hover:scale-110
            transition-all
            duration-500
          ">
            Explore Our Services
          </button>

        </div>

      </div>

    </section>
  );
};

export default Service;