
import { Badge } from '@/components/ui/badge';
import { AnimatedTechTooltip, IconType } from '@/components/ui/animated-tech-tooltip';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import React, { useRef } from 'react';
import {

  SiFigma, SiGit, SiGithub,
  SiMui,
  SiReact,
  SiTypescript, SiVercel
} from '@icons-pack/react-simple-icons';
import { OldPortfolio } from '../../../../assets/images';
import { useInView } from 'framer-motion';
import { useBreakpoints } from '@/hooks/use-breakpoints';

/* eslint-disable-next-line */
export interface FirstProjectProps {
}

export function FirstProject(props: FirstProjectProps) {
  const usedTechs: IconType[] = [
    {
      id: 1,
      name: 'Figma',
      icon: <SiFigma color={'white'} width={20} height={20} />,
      color: '#F24E1E',
      link: 'https://www.figma.com/'
    },
    {
      id: 2,
      name: 'React',
      icon: <SiReact color={'white'} width={20} height={20} />,
      color: '#00DCFF',
      link: 'https://reactjs.org/'
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: <SiTypescript color={'white'} width={20} height={20} />,
      color: '#1976D2',
      link: 'https://www.typescriptlang.org/'
    },
    {
      id: 4,
      name: 'Mui',
      icon: <SiMui color={'white'} width={20} height={20} />,
      color: '#007FFF',
      link: 'https://mui.com/'
    },
    {
      id: 5,
      name: 'Vercel',
      icon: <SiVercel color={'white'} width={20} height={20} />,
      color: '#000000',
      link: 'https://vercel.com/'
    },
    {
      id: 6,
      name: 'Git',
      icon: <SiGit color={'white'} width={20} height={20} />,
      color: '#F4511E',
      link: 'https://git-scm.com/'
    },
    {
      id: 7,
      name: 'Github',
      icon: <SiGithub color={'white'} width={20} height={20} />,
      color: '#494A4A',
      link: 'https://github.com/'
    }
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const breakpoints=useBreakpoints()
  return (
    <article className={'first-project relative flex justify-center overflow-hidden h-screen xl:gap-80 2xl:gap-96'} ref={ref}>
      <div style={{
        transform: isInView ? 'none' : 'translateY(-300px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }} className={'xl:w-[32%] 2xl:w-[28%] mt-44 z-20'}>
        <Badge variant={'secondary'} className={'mx-auto'}>web application</Badge>
        <h1 className="text-[3rem] mt-4 leading-none font-sfProBold text-black dark:text-white text-nowrap">
          Personal Portfolio
        </h1>
        <p className={'font-sfPro text-gray-400 mt-4'}>My personal portfolio project is a website that showcases my
          journey, my skills and experience as a web developer.</p>
        <div className={'used-techs flex items-center mt-8'}>
          <h3 className={'capitalize font-sfPro font-bold text-lg mr-5'}>stack&nbsp;&nbsp;&nbsp;:</h3>
          <AnimatedTechTooltip items={usedTechs} size={breakpoints.active==='2xl' ? 12 : 10} />
        </div>
        <div className={'mt-5'}>
          <a className={'flex items-center gap-2'} href={'https://ghaith-saidani.netlify.app/'} target={'_blank'}
             rel={'noreferrer'}>
            <MovingBorderButton
              borderRadius="1.75rem"
              containerClassName={'xl:w-36 xl:h-12 2xl:w-40 2xl:h-14 '}
              className="bg-background border-[1px] border-border hover:text-primary xl:text-sm 2xl:text-base">
              Tell Me More <ArrowTopRightIcon />
        </MovingBorderButton></a>
      </div>
    </div>
  <div
    style={{
      transform: isInView ? 'none' : 'translateY(300px)',
      opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
        className={'border-2 border-border place-self-end h-[95%] w-[22%] p-[15px] bg-card rounded-[50px] relative flex justify-center'}>
        <div className={'rounded-[35px] w-full overflow-hidden'}>
          <img src={OldPortfolio} alt={'old portfolio'} className={'object-fill h-full w-full'} />
        </div>
        <div className={'absolute h-6 w-28 bg-card top-3.5 rounded-b-3xl'}></div>
      </div>
      <div className="absolute bottom-0 w-screen h-[100%] bg-gradient-to-t from-background to-100% z-10" />
    </article>
  );
}

export default FirstProject;
