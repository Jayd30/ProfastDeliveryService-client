import { motion } from "framer-motion";

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";

const Clientservice = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Trusted By Global Brands
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Partnering with world-class logistics and delivery companies to
            ensure safe, reliable, and efficient parcel transportation.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.08,
                rotate: 2,
              }}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl h-32 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[#CAEB66]/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <img
                src={logo}
                alt="brand-logo"
                className="w-24 h-auto object-contain grayscale group-hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#CAEB66]">500+</h3>
            <p className="text-gray-400">Partners</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#CAEB66]">50K+</h3>
            <p className="text-gray-400">Deliveries</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#CAEB66]">99%</h3>
            <p className="text-gray-400">Success Rate</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#CAEB66]">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Clientservice;