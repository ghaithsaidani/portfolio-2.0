import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const TracingBeam = ({
                              children,
                              className,
                            }: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // track velocity of scroll to increase or decrease distance between svg gradient y coordinates.
  const scrollYProgressVelocity = useVelocity(scrollYProgress);
  const [velo, setVelocity] = React.useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight-90);
    }
    //console.log(scrollYProgress.get())
  }, []);
  useEffect(() => {
    return scrollYProgressVelocity.onChange((latestVelocity) => {
      setVelocity(latestVelocity);
    });

  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full mx-auto h-fit", className)}
    >
      <div className=" absolute py-3 right-3 z-40 h-full">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(37,99,235, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--blue-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--blue-600)",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20.1"
          /*height={svgHeight}*/ // Set the SVG height
          className=" ml-4 hidden lg:block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.7} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.7} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="rgba(37,99,235)" stopOpacity="0"></stop>
              <stop stopColor="rgba(37,99,235,0.8)"></stop>
              <stop offset="0.325" stopColor="rgba(37,99,235,0.6)"></stop>
              <stop offset="1" stopColor="rgba(37,99,235,0.2)" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0.7
                ? "rgba(37,99,235, 0.24) 0px 3px 8px"
                : "none",
          }}
          className="ml-[9px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0.7 ? "var(--blue-500)" : "white" ,
              borderColor:
                scrollYProgress.get() >0.7 ? "var(--blue-600)" : "white" ,
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
