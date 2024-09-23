"use client";

import { NAVBAR_ITEMS } from "@/constants/navbar-items";
import { Menu } from "@mantine/core";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyles = {
    position: "fixed",
    top: "5%",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  } satisfies CSSProperties;

  return (
    <nav className="flex justify-end my-2 md:hidden">
      <Menu
        opened={isOpen}
        styles={{
          dropdown: dropdownStyles,
        }}
      >
        <Menu.Target>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </Menu.Target>

        <Menu.Dropdown>
          {NAVBAR_ITEMS.map((item) => (
            <Link
              href={`#${item.id}`}
              key={item.id}
              className="text-krezonaBlack font-medium text-xl my-2"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {item.title}
            </Link>
          ))}
        </Menu.Dropdown>
      </Menu>
    </nav>
  );
};

export default MobileNavbar;
