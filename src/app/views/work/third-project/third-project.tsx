import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Badge } from '@/components/ui/badge';
import { AmanaInsurance } from '../../../../assets/images';
import {
  SiAngular,
  SiExpress, SiFigma, SiGit, SiGithub,
  SiMui, SiMysql, SiNodedotjs,
  SiTypescript
} from '@icons-pack/react-simple-icons';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import React, { useRef } from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { AnimatedTechTooltip, IconType } from '@/components/ui/animated-tech-tooltip';
import ParticlesBg from 'particles-bg';
import { useBreakpoints } from '@/hooks/use-breakpoints';
import { useMediaQuery } from '@/hooks/use-mediaQuery';

/* eslint-disable-next-line */
export interface ThirdProjectProps {
}

export function ThirdProject(props: ThirdProjectProps) {
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
  const isSm=useMediaQuery('(min-width: 500px)');
  const is2XL=useMediaQuery('(min-width: 1536px)');
  const isLg=useMediaQuery('(min-width: 1024px)')

  return (
    <article className={'third-project flex flex-col items-center justify-center h-screen overflow-hidden relative z-0'}>
      {/*<BackgroundGradientAnimation></BackgroundGradientAnimation>*/}
      <WavyBackground waveWidth={50}>
        <ContainerScroll
          image={AmanaInsurance}
          titleComponent={
            <div>
              <div>
                <Badge variant={'secondary'} className={'mx-auto'}>web application</Badge>
                <p className={'font-sfPro text-xs sm:text-sm lg:text-base text-gray-400 mt-5 px-10 lg:px-0'}>The project involves the development and deployment of an
                  application for the management of a Lybian insurance agency with report generation and
                  payment validation.</p>
                <div className={'used-techs flex items-center justify-center mt-5'}>
                  <h3 className={'capitalize font-sfPro font-bold lg:text-lg mr-5'}>stack&nbsp;&nbsp;&nbsp;:</h3>
                  <AnimatedTechTooltip items={usedTechs} size={is2XL ? 12 : isSm ? 10 : 9} />
                </div>
              </div>
              {/*<Button variant={'secondary'} className={'mt-5 gap-x-1'}>Tell Me More <ArrowTopRightIcon/></Button>*/}
              <h1
                className="text-[2rem] sm:text-[3rem] xl:text-[5rem] 2xl:text-[6rem] mt-10 lg:mt-1 leading-none font-sfProBold text-black dark:text-white">
                Amana Insurance
              </h1>
            </div>
          }
        />
        {/*<ParticlesBg type="cobweb" bg={true} color={'#0DB760'} />*/}
      </WavyBackground>
      {/*<div className="absolute bottom-0 w-screen h-[650px] bg-gradient-to-t from-background to-100% z-10" />*/}

    </article>
  );
}


export default ThirdProject;
