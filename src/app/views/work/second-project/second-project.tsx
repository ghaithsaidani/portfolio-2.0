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
import { useBreakpoints } from '@/hooks/use-breakpoints';

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
    <article className={'second-project relative flex justify-center overflow-hidden h-screen gap-[10%]'} ref={ref}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateY(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
        className={'border-2 border-border place-self-end h-[80%] w-[21%] p-[15px] bg-card rounded-[50px] relative flex justify-center'}>
        <div className={'rounded-[35px] h-full w-full overflow-hidden border-border border-[1px]'}>
          <img src={MondeEnBoucheMobile} alt={'monde en bouche mobile'} className={'w-full'} />
        </div>
        <div
          className={'absolute h-6 w-28 bg-card top-[1.95%] rounded-b-3xl border-b-[1px] border-x-[1px] border-gray-200'}></div>
      </div>

      <div style={{
        transform: isInView ? 'none' : 'translateY(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }} className={'mt-20 flex flex-col items-center xl:w-[700px] 2xl:w-[1024px] text-center'}>

          <Badge variant={'secondary'} className={'mx-auto'}>web application</Badge>
          <h1 className="text-[3rem] mt-4 leading-none font-sfProBold text-black dark:text-white capitalize">
            le monde en bouche
          </h1>
          <p className={'font-sfPro text-gray-400 mt-4 px-[12%]'}>My project is a web app that helps users discover new cuisines
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
              className="bg-background border-[1px] border-border hover:text-primary dark:bg-slate-90 text-foreground xl:text-sm 2xl:text-base"
            >
              <a className={'flex items-center gap-2'} href={'https://github.com/ghaithsaidani/le-monde-en-bouche'} target={'_blank'} rel={'noreferrer'}>Tell Me More <ArrowTopRightIcon /></a>
            </MovingBorderButton>
          </div>

        <div
          className="w-5xl mt-5 mx-auto h-full w-[90%] border-2 border-border p-[15px] bg-card rounded-[35px] shadow-xl"
        >
          <div
            className="border-border border-[1px] w-full rounded-[20px] flex  overflow-hidden">
            <img src={MondeEnBouche} alt={'project'} /></div>
        </div>
      </div>

      <div className="absolute bottom-0 w-screen h-[40%] bg-gradient-to-t from-background to-100% z-10" />
    </article>
  );
}

export default SecondProject;
