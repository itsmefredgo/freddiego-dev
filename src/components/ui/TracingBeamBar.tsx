"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Instead of ["start start", "end start"],
    // it is scaled to when end meets the end.
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.offsetHeight);
    }
  }, [usePathname(), ref.current?.offsetHeight]); // remakes the svg height on route change

  // Instead of creating the beam from in scale from 0.8 to 1,
  // Now is is mapped from 1 to 1.25 to reflect the height of the content
  // when the beam is applied to the whole page.
  // bottom end of gradient
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  // top of the gradient
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1.25], [0, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn(" relative w-auto max-w-4xl mx-auto h-full", className)}
    >
      <div className=" h-[calc(100%)] absolute -left-6 md:-left-10 top-3 flex flex-col justify-center">
        {/* Circle in the start point */}
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[0px] h-4 w-4 rounded-full border border-[#34805c] 
          shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 2,
              delay: 10,
            }}
            // Instead of making it white when scrolled,
            // it is now kept the original colour at all times.
            animate={{
              backgroundColor: "#52B788",
              borderColor: "#52B788",
            }}
            className="h-2 w-2 rounded-full border-2 border-[#52B788] bg-[#52B788]"
          />
        </motion.div>
        {/* End of Circle in the start point */}
        <svg
          viewBox={`0 0 10 ${svgHeight}`}
          // Set the SVG height
          className=" block h-full w-auto" // height changed to reflect the responsive height
          aria-hidden="true"
        >
          {/* Grey bar behind */}
          {/* original shape at the end removed.  */}
          <motion.path
            d={`M0 0 V-1 l5 0 V ${svgHeight * 1}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.1"
            transition={{
              duration: 0,
            }}
          ></motion.path>
          {/* Active bar on top */}
          <motion.path
            d={`M0 0 V-1 l5 0 V${svgHeight * 1}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{
              duration: 0,
            }}
          ></motion.path>
          {/* Motion */}
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#95D5B2" stopOpacity="0"></stop>
              <stop stopColor="#95D5B2"></stop>
              <stop offset="0.325" stopColor="#40916C"></stop>
              <stop offset="1" stopColor="#40916C" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      {/* Contents */}
      <div className="min-h-[calc(100vh+1px)]" ref={contentRef}>
        {children}
      </div>
    </motion.div>
  );
};