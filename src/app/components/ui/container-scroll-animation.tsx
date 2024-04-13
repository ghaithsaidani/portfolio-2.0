'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-mediaQuery';

export const ContainerScroll = ({
                                  image,
                                  titleComponent
                                }: {
  image: string;
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef
  });
  const is2xl=useMediaQuery('(min-width:1535px)');
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return [1.05,1];
  };

  const rotate = useTransform(scrollYProgress,  is2xl ? [0,1] : [1.5, 0], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, is2xl ? [0,1] : [1.5, 0], [0, -100]);

  return (
    <div
      className="h-full flex justify-center relative p-5"
      ref={containerRef}
    >

      <div
        className="py-5 w-full relative"
        style={{
          perspective: '1000px'
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />


        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          image={image}
        />

      </div>

    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
                       rotate,
                       scale,
                       image,
                     }: {
  rotate: any;
  scale: any;
  translate: any;
  image: any;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
      }}
      className="w-full h-full lg:max-w-5xl -mt-12 mx-auto xl:h-[35rem] 2xl:h-[40rem] border-2 border-border p-[10px] lg:p-[15px] bg-card rounded-[30px] lg:rounded-[35px] shadow-xl"
    >
      <div
        className="w-full rounded-[20px] flex h-full overflow-hidden">
        <img src={image} alt={'project'} className={'object-cover'}/>
      </div>
    </motion.div>
  );
};
