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
    <section className="text-white mb-48">
      <div className="border-b-2 border-[#33343F] py-8 px-2 sm:px-8 md:px-16 flex flex-row items-center justify-between">
        {statistics.map((statistic, index) => (
          <div key={statistic.key} className="flex flex-col items-center justify-center mx-4">
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {statistic.number}
            </h3>
            <p className="text-base md:text-lg">{statistic.field}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
