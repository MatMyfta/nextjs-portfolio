"use client";
import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

const services = [
  {
    key: 0,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iusto illo accusantium praesentium enim natus cupiditate nisi aut obcaecati vitae esse, ipsum vero pariatur fugiat debitis labore error cumque facere.",
  },
  {
    key: 1,
    title: "Software Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iusto illo accusantium praesentium enim natus cupiditate nisi aut obcaecati vitae esse, ipsum vero pariatur fugiat debitis labore error cumque facere.",
  },
  {
    key: 2,
    title: "Mobile Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam iusto illo accusantium praesentium enim natus cupiditate nisi aut obcaecati vitae esse, ipsum vero pariatur fugiat debitis labore error cumque facere.",
  },
];

const ServicesSection = () => {
  return (
    <section className="mb-24 md:mb-48">
      <div className="container mx-auto px-8 md:px-12 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start xl:gap-16">
          {services.map((service, index) => (
            <div key={service.key}>
              <h3 className="text-3xl font-bold mb-4">
                <CodeBracketIcon className="inline-block h-8 w-8 mr-4" />
                {service.title}
              </h3>
              <p className="text-base md:text-md mb-8">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
