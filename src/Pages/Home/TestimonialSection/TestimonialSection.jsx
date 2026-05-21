"use client";

import { useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Awlad Hossin",
      role: "Senior Product Designer",
      review:
        "Amazing service! My packages always arrive on time and the tracking system is super accurate.",
    },
    {
      name: "Nasir Uddin",
      role: "CEO",
      review:
        "The delivery process is smooth and reliable. Their customer support team is always helpful.",
    },
    {
      name: "Rasel Ahamed",
      role: "CTO",
      review:
        "Safe packaging and fast delivery exceeded my expectations. Highly recommended for businesses.",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      review:
        "I love how easy it is to track orders in real time. The interface is modern and user-friendly.",
    },
    {
      name: "Michael Lee",
      role: "Entrepreneur",
      review:
        "Affordable pricing with premium service quality. My customers are happier than ever.",
    },
    {
      name: "Emily Carter",
      role: "E-commerce Seller",
      review:
        "Nationwide coverage helped me expand my business quickly. Delivery times are impressive.",
    },
  ];

  // Start from first 3 cards
  const [startIndex, setStartIndex] = useState(0);

  // Show 3 cards at a time
  const visibleCards = testimonials.slice(startIndex, startIndex + 3);

  // Next button
  const handleNext = () => {
    if (startIndex < testimonials.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  // Previous button
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-white py-24 px-6 overflow-hidden">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#16323B] mb-6">
          What our customers are sayings
        </h2>

        <p className="text-[#6B7280] text-lg leading-8">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">

        {visibleCards.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-[30px]
              p-8
              border border-[#B7D63E]
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all duration-500
              group
            "
          >

            {/* Quote */}
            <div className="text-6xl text-[#D7C9C9] mb-4">
              ”
            </div>

            {/* Review */}
            <p className="text-[#5F6368] leading-8 text-lg mb-8">
              {item.review}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-[#9CA3AF] mb-6"></div>

            {/* User */}
            <div className="flex items-center gap-4">
              
              <div
                className="
                  w-14 h-14 rounded-full
                  bg-[#16323B]
                  text-white
                  flex items-center justify-center
                  font-bold text-lg
                  group-hover:bg-[#B7D63E]
                  transition-all duration-500
                "
              >
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#16323B]">
                  {item.name}
                </h4>

                <p className="text-[#7B7B7B]">
                  {item.role}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-5 mt-14">

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="
            w-12 h-12 rounded-full
            bg-white
            shadow-md
            flex items-center justify-center
            text-2xl
            hover:bg-[#16323B]
            hover:text-white
            transition-all duration-300
            disabled:opacity-40
          "
          disabled={startIndex === 0}
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.slice(0, testimonials.length - 2).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                startIndex === i
                  ? "bg-[#16323B] scale-125"
                  : "bg-[#A7D7DB]"
              }`}
            ></span>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="
            w-12 h-12 rounded-full
            bg-[#B7D63E]
            shadow-md
            flex items-center justify-center
            text-2xl text-[#16323B]
            hover:scale-110
            transition-all duration-300
            disabled:opacity-40
          "
          disabled={startIndex >= testimonials.length - 3}
        >
          →
        </button>
      </div>
    </section>
  );
}