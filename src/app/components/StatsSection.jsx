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
    <section className="bg-zinc-900 text-white mb-24 md:mb-48">
      <div className="container mx-auto px-8 md:px-12 py-12">
        <div className="py-4 px-0 sm:px-4 md:px-8 md:py-8 flex flex-row items-center justify-between">
          {statistics.map((statistic, index) => (
            <div
              key={statistic.key}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2">
                {statistic.number}
              </h3>
              <p className="text-xs md:text-lg font-bold">{statistic.field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
