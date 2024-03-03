import styles from './second-project.module.scss';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { MondeEnBouche, MondeEnBoucheMobile, OldPortfolio } from '../../../../assets/images';
import { AnimatedTechTooltip, IconType } from '@/components/ui/animated-tech-tooltip';
import {
  SiDjango,
  SiFigma, SiGit, SiGithub, SiJavascript,
  SiMui, SiPostgresql, SiReact,
} from '@icons-pack/react-simple-icons';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useBreakpoints } from '@/hooks/useBreakpoints';

/* eslint-disable-next-line */
export interface SecondProjectProps {
}

export function SecondProject(props: SecondProjectProps) {

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
      id:3,
      name: 'Javascript',
      icon: <SiJavascript color={'white'} />,
      color: '#FFD600',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
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
      name: 'Django',
      icon: <SiDjango color={'white'} />,
      color: '#092E20',
      link: 'https://www.djangoproject.com/'
    },
    {
      id: 6,
      name: 'PostgreSql',
      icon: <SiPostgresql color={'white'} />,
      color: '#4169E1',
      link: 'https://www.postgresql.org/'
    },
    {
      id: 8,
      name: 'Git',
      icon: <SiGit color={'white'} width={20} height={20} />,
      color: '#F4511E',
      link: 'https://git-scm.com/'
    },
    {
      id: 9,
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
    <article className={'first-project relative flex justify-center overflow-hidden h-screen xl:gap-24 2xl:gap-60'} ref={ref}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateY(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
        className={'border-2 border-gray-200 place-self-end xl:h-[600px] 2xl:h-[850px] xl:w-[350px] 2xl:w-[400px] p-[15px] bg-white rounded-[50px] relative flex justify-center'}>
        <div className={'rounded-[35px] h-full w-full overflow-hidden border-border border-[1px]'}>
          <img src={MondeEnBoucheMobile} alt={'monde en bouche mobile'} className={'w-full'} />
        </div>
        <div
          className={'absolute h-6 w-28 bg-white top-[15.4px] rounded-b-3xl border-b-[1px] border-x-[1px] border-gray-200'}></div>
      </div>

      <div style={{
        transform: isInView ? 'none' : 'translateY(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }} className={'mt-20 flex flex-col items-center xl:w-[700px] 2xl:w-[1024px] text-center'}>

          <Badge variant={'secondary'} className={'mx-auto'}>web application</Badge>
          <h1 className="xl:text-[3rem] 2xl:text-[4rem] mt-4 leading-none font-sfProBold text-black dark:text-white capitalize">
            le monde en bouche
          </h1>
          <p className={'font-sfPro text-gray-400 mt-4 xl:px-20 2xl:px-36'}>My project is a web app that helps users discover new cuisines
            and cultures. It allows users to select a country and a traditional dish from that country, and then it
            suggests nearby restaurants that offer that dish.</p>
          <div className={'used-techs flex items-center xl:mt-5 2xl:mt-8'}>
            <h3 className={'capitalize font-sfPro font-bold text-lg mr-5'}>stack&nbsp;&nbsp;&nbsp;:</h3>
            <AnimatedTechTooltip items={usedTechs} size={breakpoints.active==='2xl' ? 12: 10} />
          </div>
          <div className={'mt-5'}>
            <MovingBorderButton
              borderRadius="1.75rem"
              containerClassName={'xl:w-36 xl:h-12 2xl:w-40 2xl:h-14'}
              className="bg-white dark:bg-slate-90 dark:text-white border-none dark:border-slate-800 xl:text-sm 2xl:text-base"
            >
              <a className={'flex items-center gap-2'} href={'https://github.com/ghaithsaidani/le-monde-en-bouche'} target={'_blank'} rel={'noreferrer'}>Tell Me More <ArrowTopRightIcon /></a>
            </MovingBorderButton>
          </div>

        <motion.div
          className="w-5xl mt-5 mx-auto h-[30rem] 2xl:h-[40rem] w-full border-2 border-border p-[15px] bg-white rounded-[35px] shadow-xl"
        >
          <div
            className="bg-gray-100 w-full rounded-[20px] flex h-full overflow-hidden">
            <img src={MondeEnBouche} alt={'project'} /></div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-screen h-[50%] bg-gradient-to-t from-background to-100% z-10" />
    </article>
  );
}

export default SecondProject;
