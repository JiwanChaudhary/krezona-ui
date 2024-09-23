"use client";

import React from "react";
import { IoIosPulse } from "react-icons/io";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children, ...props }: SectionHeadingProps) => {
  return (
    <p
      {...props}
      className="text-xl font-bold my-2 md:mt-5 md:mb-4 text-krezonaBlack tracking-wide flex gap-2 items-center justify-center"
    >
      <IoIosPulse />
      <span>{children}</span>
    </p>
  );
};

export default SectionHeading;
