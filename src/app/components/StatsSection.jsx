import React from "react";

const statistics = [
  {
    number: "20+",
    field: "Projects",
  },
  {
    number: "10+",
    field: "Users",
  },
  {
    number: "2",
    field: "Awards",
  },
  {
    number: "1+",
    field: "Years",
  },
];

const StatsSection = () => {
  return (
    <section className="text-white mb-48">
      <div className="border-b-2 border-[#33343F] py-8 px-2 sm:px-8 md:px-16 flex flex-row items-center justify-between">
        {statistics.map((service, index) => (
          <div className="flex flex-col items-center justify-center mx-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {service.number}
            </h3>
            <p className="text-base md:text-lg">{service.field}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
