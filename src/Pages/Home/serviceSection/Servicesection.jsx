export default function DeliveryServiceSection() {
  const services = [
    {
      title: "Fast Delivery",
      description:
        "Get your packages delivered quickly with our optimized delivery network and real-time tracking system.",
      icon: "🚚",
    },
    {
      title: "Live Tracking",
      description:
        "Track your orders live from pickup to doorstep with accurate delivery updates anytime.",
      icon: "📍",
    },
    {
      title: "Safe Packaging",
      description:
        "We ensure secure handling and protective packaging for every shipment and parcel.",
      icon: "📦",
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to assist with your delivery needs.",
      icon: "🎧",
    },
    {
      title: "Affordable Pricing",
      description:
        "Enjoy reliable delivery services at budget-friendly prices for businesses and individuals.",
      icon: "💳",
    },
    {
      title: "Nationwide Coverage",
      description:
        "Deliver packages across cities with our extensive and trusted nationwide network.",
      icon: "🌍",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      
      <div data-aos="fade-in" className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
          Smart & Reliable Delivery Services
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
          Our delivery platform provides fast, secure, and affordable shipping
          solutions designed for modern businesses and customers. From real-time
          tracking to safe packaging and nationwide coverage, we ensure every
          package reaches its destination smoothly and on time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2 hover:bg-green-50 group cursor-pointer"
          >
            
            <div className="w-16 h-16 rounded-2xl bg-orange-100 group-hover:bg-green-200 flex items-center justify-center text-3xl mb-6 mx-auto transition-all duration-300">
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center group-hover:text-green-700 transition-all duration-300">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-7 text-center">
              {service.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}