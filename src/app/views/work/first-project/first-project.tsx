import styles from './first-project.module.scss';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { Badge } from '@/components/ui/badge';
import { AnimatedTechTooltip, IconType } from '@/components/ui/animated-tech-tooltip';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import {
  SiAngular,
  SiExpress,
  SiFigma, SiGit, SiGithub,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiTypescript
} from '@icons-pack/react-simple-icons';
import { OldPortfolio } from '../../../../assets/images';

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
      name: 'Angular',
      icon: <SiAngular color={'white'} width={20} height={20} />,
      color: '#DE002D',
      link: 'https://angular.io/'
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
      name: 'NodeJs',
      icon: <SiNodedotjs color={'white'} width={20} height={20} />,
      color: '#4CAF50',
      link: 'https://nodejs.org/en'
    },
    {
      id: 6,
      name: 'ExpressJs',
      icon: <SiExpress color={'white'} width={20} height={20} />,
      color: '#212121',
      link: 'https://expressjs.com/'
    },
    {
      id: 7,
      name: 'MySql',
      icon: <SiMysql color={'white'} width={20} height={20} />,
      color: '#4479A1',
      link: 'https://www.mysql.com/'
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
  return (
    <article className={'first-project relative flex justify-center overflow-hidden h-screen gap-96'}>
      <div className={'w-[28%] mt-44 z-20'}>
        <Badge variant={'secondary'} className={'mx-auto'}>web application</Badge>
        <h1 className="md:text-[4rem] mt-4 leading-none font-sfProBold text-black dark:text-white">
          Personal Portfolio
        </h1>
        <p className={'font-sfPro text-gray-400 mt-4'}>You can add what outcomes has this project brought after
          your
          design! For example, can show some real data.</p>
        <div className={'used-techs flex items-center mt-8'}>
          <h3 className={'capitalize font-sfPro font-bold text-lg mr-5'}>stack&nbsp;&nbsp;&nbsp;:</h3>
          <AnimatedTechTooltip items={usedTechs} size={12} />
        </div>
        <div className={'mt-5'}>
          <MovingBorderButton
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-90 dark:text-white border-none dark:border-slate-800"
          >
            Tell Me More <ArrowTopRightIcon />
          </MovingBorderButton>
        </div>
      </div>
      <div
        className={'border-2 border-gray-200 place-self-end h-[850px] p-[15px] bg-white rounded-[50px] relative flex justify-center'}>
        <div className={'rounded-[35px] h-full overflow-hidden'}>
          <img src={OldPortfolio} alt={'old portfolio'} className={'h-full'} />
        </div>
        <div className={'absolute h-6 w-28 bg-white top-3.5 rounded-b-3xl border-b-2 border-x-2 border-gray-200'}></div>
      </div>
      <div className="absolute bottom-0 w-screen h-[600px] bg-gradient-to-t from-background to-100% z-10" />
    </article>
  );
}

export default FirstProject;
