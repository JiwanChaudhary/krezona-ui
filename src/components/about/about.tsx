import React from "react";
import SectionTitle from "../ui/section-title";
import { AiFillCheckCircle } from "react-icons/ai";
import { ABOUT_ITEMS } from "@/constants/about-items";
import disabledTwo from "@/assets/disable-2.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="flex items-start justify-between">
      <div>
        <SectionTitle>
          Empowering Independence, <br /> Together
        </SectionTitle>
        <p className="my-2 md:my-3 tracking-wide">
          Impact care seeks to provide good quality services for people with
          disabilities.
        </p>
        {ABOUT_ITEMS.map((item) => (
          <div key={item.key} className="flex gap-3 my-2">
            <AiFillCheckCircle size={24} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        <Image src={disabledTwo} alt="happy family" />
      </div>
      <p className="my-2 md:my-3 tracking-wide">
        Impact care seeks to provide good quality services to people with
        disabilities, ensuring that their individual
      </p>
    </section>
  );
};

export default About;
