'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

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
    return /*isMobile ? [1.1,1]: */[1.05,1];
  };

  const rotate = useTransform(scrollYProgress, isMobile ? [1.5, 0] : [0,1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, isMobile ? [1.5, 0] : [0,1], [0, -100]);

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
                       translate,
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
        /*boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'*/
      }}
      className="w-full h-full lg:max-w-5xl -mt-12 mx-auto xl:h-[35rem] 2xl:h-[40rem] border-2 border-border p-[10px] lg:p-[15px] bg-card rounded-[30px] lg:rounded-[35px] shadow-xl"
    >
      <div
        className="w-full rounded-[20px] flex h-full overflow-hidden">
        <img src={image} alt={'project'} className={'object-cover'}/>

        {/*{users.map((user, idx: number) => (
          <motion.div
            key={`user-${idx}`}
            className="bg-white rounded-md cursor-pointer relative"
            style={{ translateY: translate }}
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            }}
          >
            <div className="absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1">
              {user.badge}
            </div>
            <img
              src={user.image}
              className="rounded-tr-md rounded-tl-md text-sm "
              alt="thumbnail"
            />
            <div className="p-4">
              <h1 className="font-semibold text-sm ">{user.name}</h1>
              <h2 className=" text-gray-500 text-xs ">{user.designation}</h2>
            </div>
          </motion.div>
        ))}*/}
      </div>
    </motion.div>
  );
};
