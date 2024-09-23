import { LOGO, NAVBAR_ITEMS } from "@/constants/navbar-items";
import Link from "next/link";
import React from "react";
import KrezonaButton from "../ui/button";

const DesktopNavbar = () => {
  return (
    <nav className="hidden md:flex md:items-center md:justify-between md:gap-5 md:py-4">
      <h1 className="tracking-wide font-bold text-2xl text-krezonaBlack cursor-pointer">
        {LOGO.toUpperCase()}
      </h1>
      <div className="flex items-center gap-4 lg:gap-7">
        {NAVBAR_ITEMS.map((item) => (
          <Link
            href={`#${item.id}`}
            key={item.id}
            className="text-krezonaBlack font-normal"
          >
            {item.title}
          </Link>
        ))}
        <KrezonaButton>Book an Appointment</KrezonaButton>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
