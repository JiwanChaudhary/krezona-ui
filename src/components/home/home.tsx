import React from "react";
import KrezonaButton from "../ui/button";
import Image from "next/image";
import disabledOne from "@/assets/disable-1.png";
import human from "@/assets/human.png";

const Home = () => {
  return (
    <section
      id="home"
      className="flex gap-5 items-start justify-start relative"
    >
      <div className="max-w-[600px]">
        <h2 className="text-xl font-bold my-2 md:mt-5 md:mb-4 text-krezonaBlack tracking-wide md:text-2xl lg:text-4xl">
          Your Partner at <br /> Disability
        </h2>
        <p className="my-2 md:my-3 tracking-wide">
          Impack care seeks to provide good quality services for people with
          disabilities, ensuring that their individual requirements are met.
        </p>
        <KrezonaButton>Book an Appointment</KrezonaButton>
      </div>
      <div className="hidden md:block md:mt-5">
        <Image
          src={disabledOne}
          alt="happy person"
          className="h-[16.5rem] w-64"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={human}
          alt="human"
          className="h-9 w-9 absolute right-0 bottom-0"
        />
      </div>
    </section>
  );
};

export default Home;
