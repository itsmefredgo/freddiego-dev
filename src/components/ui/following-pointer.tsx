"use client";

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/utils/cn";

export const FollowerPointerCard = ({
  children,
  className,
  title,
  isFixed,
  bgColour,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  isFixed?: boolean;
  bgColour?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line
  const isFixedComponent = isFixed || false;
  const bgColourInput = bgColour || "#222222";
  const updateRect = () => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  };
  useEffect(() => {
    window.addEventListener("resize", updateRect);
    updateRect();
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      if (isFixedComponent) {
        x.set(e.clientX - rect.left - 10);
        y.set(e.clientY - rect.top + 10);
      } else {
        x.set(e.clientX - rect.left + scrollX);
        y.set(e.clientY - rect.top + scrollY);
      }
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    updateRect();
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && (
          <FollowPointer x={x} y={y} title={title} bgColour={bgColourInput} />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
  bgColour,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
  bgColour?: string;
}) => {
  const colors = [bgColour];
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <motion.div
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        className={`px-2 py-2 bg-neutral-200 
        text-white whitespace-nowrap min-w-max text-xs rounded-full`}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};
