"use client";

import { useEffect, useState } from "react";
import { TRUST_ITEMS } from "@/lib/home-data";

export default function TrustStrip() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % TRUST_ITEMS.length);
        setVisible(true);
      }, 200);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-[2] bg-brand text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-center px-4 py-[18px] font-barlow-condensed text-[17px] font-bold uppercase tracking-[0.05em] sm:px-6 md:px-8">
        {/* mobile: one item, auto-rotating every 2s */}
        <span
          className={`text-center transition-opacity duration-200 sm:hidden ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {TRUST_ITEMS[index]}
        </span>

        {/* tablet/desktop: full list */}
        <div className="hidden flex-wrap items-center justify-center gap-x-[18px] gap-y-[10px] sm:flex">
          {TRUST_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-[18px]">
              {i > 0 && <span className="opacity-50">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
