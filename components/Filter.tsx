"use client";

import { formUrlQuery } from "@/sanity/schemas/utils";
import {   useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const links = ["all", "Next Js", "frontend", "backend", "Others" ];

const Filter = () => {
  const [active, setActive] = useState('');
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = '';
    
    if(active === link) {
      setActive('');

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link);

      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }
    
    router.push(newUrl, { scroll: false });
  }

  return (
    <ul
      className="text-white-800 body-text flex max-w-full
     gap-2 overflow-auto py-4 sm:max-w-2xl  "
    >
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`whitespace-nowrap rounded-lg px-8 py-2.5 capitalize ${
            active === link && " bg-orange"
          }`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filter;
