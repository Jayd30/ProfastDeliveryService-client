import React from 'react';

const Faq = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
          Frequently Asked Questions
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto leading-8 text-lg">
          Find answers to the most common questions about our delivery services,
          tracking system, pricing, and customer support.
        </p>
      </div>

      {/* FAQ Container */}
      <div className="space-y-5">

        {/* FAQ 1 */}
        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300">
          
          <input type="radio" name="faq-accordion"  />

          <div className="collapse-title text-lg font-semibold text-gray-800">
            How do I create an account?
          </div>

          <div className="collapse-content text-gray-600 leading-7">
            Click the "Sign Up" button in the top-right corner and follow the
            registration process. You can create your account in less than a minute.
          </div>

        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-400 transition-all duration-300">
          
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title text-lg font-semibold text-gray-800">
            How can I track my parcel?
          </div>

          <div className="collapse-content text-gray-600 leading-7">
            Use our live tracking feature by entering your tracking ID in the
            tracking section to monitor your parcel in real-time.
          </div>

        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-orange-400 transition-all duration-300">
          
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title text-lg font-semibold text-gray-800">
            What should I do if my parcel is delayed?
          </div>

          <div className="collapse-content text-gray-600 leading-7">
            If your parcel is delayed, contact our 24/7 support team with your
            tracking number for immediate assistance and updates.
          </div>

        </div>

        {/* FAQ 4 */}
        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-pink-400 transition-all duration-300">
          
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title text-lg font-semibold text-gray-800">
            Do you provide nationwide delivery?
          </div>

          <div className="collapse-content text-gray-600 leading-7">
            Yes, we deliver parcels across the country through our trusted and
            extensive nationwide delivery network.
          </div>

        </div>

        {/* FAQ 5 */}
        <div className="collapse collapse-arrow bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-purple-400 transition-all duration-300">
          
          <input type="radio" name="faq-accordion" />

          <div className="collapse-title text-lg font-semibold text-gray-800">
            Is my package safely handled?
          </div>

          <div className="collapse-content text-gray-600 leading-7">
            Absolutely. We use secure packaging and careful handling processes
            to ensure every parcel arrives safely and damage-free.
          </div>

        </div>

      </div>

    </section>
  );
};

export default Faq;