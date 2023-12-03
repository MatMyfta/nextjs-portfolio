import React from "react";

const statistics = [
  {
    key: 0,
    number: "20+",
    field: "Projects",
  },
  {
    key: 1,
    number: "10+",
    field: "Users",
  },
  {
    key: 2,
    number: "2",
    field: "Awards",
  },
  {
    key: 3,
    number: "1+",
    field: "Years",
  },
];

const StatsSection = () => {
  return (
    <section className="text-white mb-24 md:mb-48">
      <div className="border-b-2 border-[#33343F] py-4 px-0 sm:px-4 md:px-8 md:py-8 flex flex-row items-center justify-between">
        {statistics.map((statistic, index) => (
          <div key={statistic.key} className="flex flex-col items-center justify-center mx-4">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {statistic.number}
            </h3>
            <p className="text-xs md:text-lg">{statistic.field}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
