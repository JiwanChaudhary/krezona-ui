"use client";

import { cn } from "@/libs/utils";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className, ...props }: SectionTitleProps) => {
  return (
    <p
      {...props}
      className={cn(
        "text-xl font-bold my-2 md:mt-5 md:mb-4 text-krezonaBlack tracking-wide md:text-2xl lg:text-4xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export default SectionTitle;
