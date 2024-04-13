import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { ProjectCard, ProjectCardProps } from '@/components/ui/project-card';
import { useMediaQuery } from '@/hooks/use-mediaQuery';


export const Tabs = ({
                       tabs: propTabs,
                       containerClassName,
                       activeTabClassName,
                       tabClassName,
                       contentClassName,
                     }: {
  tabs: ProjectCardProps[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<ProjectCardProps>(propTabs[0]);
  const [tabs, setTabs] = useState<ProjectCardProps[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] h-14 lg:h-fit relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-3 sm:px-4 py-2 text-[.7rem] sm:text-sm lg:text-lg rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.title === tab.title && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white font-sfPro">
              {`Project ${idx+1}`}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.title}
        hovering={hovering}
        className={cn("mt-12", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
                            className,
                            tabs,
                            hovering,
                          }: {
  className?: string;
  key?: string;
  tabs: ProjectCardProps[];
  active: ProjectCardProps;
  hovering?: boolean;
}) => {
  const isActive = (tab: ProjectCardProps) => {
    return tab.title === tabs[0].title;
  };
  const isLg=useMediaQuery('(min-width: 1024px)')
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.title}
          layoutId={tab.title}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? isLg ? (idx * -50) : idx * -30 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <ProjectCard title={tab.title} image={tab.image} stack={tab.stack} link={tab.link}/>
        </motion.div>
      ))}
    </div>
  );
};

