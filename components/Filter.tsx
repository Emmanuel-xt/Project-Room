"use client";

import React, { useState } from "react";

const links = ["all", "Next 13", "frontend", "backend", "full stack"];

const Filter = () => {
  const [active, setActive] = useState("all");

  const handleFilter = (link: string) => {
    setActive(link);
  };

  return (
    <ul
      className="text-white-800 body-text flex max-w-full
     gap-2 overflow-auto py-12 sm:max-w-2xl"
    >
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`whitespace-nowrap rounded-lg px-8 py-2.5 capitalize ${
            active === link && "gradient_blue-purple"
          }`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filter;
