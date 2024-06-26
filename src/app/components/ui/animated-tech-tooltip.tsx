import React, { ReactElement, useState } from 'react';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring
} from 'framer-motion';

export type IconType = {
  id: number
  name: string;
  icon: ReactElement;
  color: string;
  link?: string;
}

export const AnimatedTechTooltip = ({
                                      items,
                                      size
                                    }: {

  items: IconType[],
  size?: number
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: 'nowrap'
                }}
                className="absolute -top-10 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl w-20 lg:w-24 py-2"
              >
                <div
                  className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div
                  className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-sfPro text-white relative z-30 text-xs lg:text-sm">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <a onMouseMove={handleMouseMove} href={item.link} target={'_blank'} rel={'noreferrer'}>
            <div
              className={`object-cover grid place-items-center !m-0 !p-0 object-top rounded-full h-${size} w-${size} [&>*]:h-3 [&>*]:w-3 sm:[&>*]:h-4 sm:[&>*]:w-4 xl:[&>*]:h-6 xl:[&>*]:w-6 border-2 group-hover:scale-105 group-hover:z-30 border-background relative transition duration-500 pointer-events-none`}
              style={{ background: item.color }}>
              {item.icon}
            </div>
          </a>

        </div>
      ))}
    </>
  );
};
