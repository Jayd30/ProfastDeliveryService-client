
import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/brands/amazon.png';
import logo2 from '../../../assets/brands/amazon_vector.png';
import logo3 from '../../../assets/../assets/brands/casio.png';
import logo4 from '../../../assets/brands/moonstar.png';
import logo5 from '../../../assets/brands/randstad.png';
import logo6 from '../../../assets/brands/star.png';
import logo7 from '../../../assets/brands/start_people.png';

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
    <section className="py-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden  ">
      <div className="px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted Delivery Partners
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto leading-7">
          We proudly collaborate with leading delivery and logistics companies
          to provide secure, fast, and reliable services across the country.
        </p>
      </div>

    <div className="flex gap-6 overflow-hidden ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 w-44 h-28 flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="max-h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
     </div>
    </section>
  );
};

export default Clientservice;
