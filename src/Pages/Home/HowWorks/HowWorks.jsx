import React from "react";
import {
  FaTruckPickup,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const workData = [
  {
    id: 1,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaTruckPickup />,
  },
  {
    id: 2,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaMoneyBillWave />,
  },
  {
    id: 3,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaWarehouse />,
  },
  {
    id: 4,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaBuilding />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#FFF7F7]">
      <div  className=" px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-[#0B1C26] mb-12">
          How it Works
        </h2>

        {/* Cards */}
        <div data-aos="zoom-out-right"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {workData.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAEEEE] rounded-[24px] p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl text-[#0B1C26] mb-6 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0B1C26] mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] leading-7 text-sm">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;