import React from "react";
import Image from "next/image";
import AboutTabs from "./AboutTabs";

const AboutSection = () => {
  return (
    <section className="text-white mb-48">
      <div className="md:grid md:grid-cols-2 gap-8 items-start xl:gap-16">
        <Image src="/images/about.jpg" alt="Developer" width={1200} height={1200} className="mb-8 w-[100%] object-cover max-h-[600px]" />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            iusto illo accusantium praesentium enim natus cupiditate nisi aut
            obcaecati vitae esse, ipsum vero pariatur fugiat debitis labore
            error cumque facere.
          </p>
					<AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
