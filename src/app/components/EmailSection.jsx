"use client";
import React from "react";
import Link from "next/link";
import { Tooltip, Button } from "@nextui-org/react";

let contacts = [
  {
    key: 0,
    id: "@mateomyftaraj",
    label: "Linkedin",
    url: "https://www.linkedin.com/in/mateomyftaraj/",
  },
  {
    key: 1,
    id: "@MatMyfta",
    label: "Github",
    url: "https://github.com/MatMyfta",
  },
  {
    key: 2,
    id: "@matmyfta",
    label: "Instagram",
    url: "https://www.instagram.com/matmyfta/",
  },
  {
    key: 3,
    id: "matmyfta",
    label: "Discord",
    url: "https://discord.com/users/155985869788938241",
  },
];

const EmailSection = () => {
  return (
    <section className=" mb-24 md:mb-48">
      <div className="container mx-auto px-8 md:px-12 py-4">
        <div className="md:grid md:grid-cols-2 gap-8 items-start xl:gap-16">
          <div>
            <h2 className="text-4xl font-bold  mb-4">Let&apos;s connect</h2>
            <p className="text-base md:text-lg mb-4 md:mb-12">
              I am currently looking for new opportunities. Whether you have an
              exciting project idea or simply want to discuss web development,
              drop me a line using the form below. I&apos;m eager to hear from
              you and explore how we can collaborate.
            </p>
            <p className="text-base md:text-lg mb-4">
              You can also find me here:
            </p>
            <div className="mb-12">
              <ul>
                {contacts.map((item, index) => (
                  <li key={item.key} className="mb-2">
                    <Tooltip className="" placement="right" content={item.id}>
                      <Link href={item.url}>
                        <Button>{item.label}</Button>
                      </Link>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <form className="flex flex-col" method="POST" action="/">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john.doe@example.com"
                className="bg-[#ecedef] border border-[#cacdd3] placeholder-[#7C8289] text-gray-600 text-sm rounded-lg block w-full p-2 mb-4 outline-none"
              />
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-[#ecedef] border border-[#cacdd3] placeholder-[#7C8289] text-gray-600 text-sm rounded-lg block w-full p-2 mb-4 outline-none"
              />
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium"
              >
                Content
              </label>
              <textarea
                name="content"
                id=""
                cols="30"
                rows="10"
                placeholder="Let's talk about...."
                className="bg-[#ecedef] border border-[#cacdd3] placeholder-[#7C8289] text-gray-600 text-sm rounded-lg block w-full p-2 mb-4 outline-none"
              ></textarea>
              <button
                disabled
                type="submit"
                value="Send"
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
