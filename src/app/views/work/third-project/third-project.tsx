import styles from './third-project.module.scss';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Badge } from '@/components/ui/badge';
import { AmanaInsurance, MondeEnBouche } from '../../../../assets/images';
import { IconInterface } from '@/ts/icon.type';
import {
  SiAngular,
  SiExpress, SiFigma, SiGit, SiGithub,
  SiMui, SiMysql, SiNodedotjs,
  SiTypescript
} from '@icons-pack/react-simple-icons';
import { Button } from '@/components/ui/button';
import { ArrowBottomLeftIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import React from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { AnimatedTechTooltip, IconType } from '@/components/ui/animated-tech-tooltip';
import ParticlesBg from 'particles-bg';

/* eslint-disable-next-line */
export interface ThirdProjectProps {
}

export function ThirdProject(props: ThirdProjectProps) {
  const usedTechs: IconType[] = [
    {
      id:1,
      name: 'Figma',
      icon: <SiFigma color={'white'} width={20} height={20} />,
      color: '#F24E1E',
      link: 'https://www.figma.com/'
    },
    {
      id:2,
      name: 'Angular',
      icon: <SiAngular color={'white'} width={20} height={20} />,
      color: '#DE002D',
      link: 'https://angular.io/'
    },
    {
      id:3,
      name: 'TypeScript',
      icon: <SiTypescript color={'white'} width={20} height={20} />,
      color: '#1976D2',
      link: 'https://www.typescriptlang.org/'
    },
    {id:4, name: 'Mui', icon: <SiMui color={'white'} width={20} height={20} />, color: '#007FFF', link: 'https://mui.com/' },
    {
      id:5,
      name: 'NodeJs',
      icon: <SiNodedotjs color={'white'} width={20} height={20} />,
      color: '#4CAF50',
      link: 'https://nodejs.org/en'
    },
    {
      id:6,
      name: 'ExpressJs',
      icon: <SiExpress color={'white'} width={20} height={20} />,
      color: '#212121',
      link: 'https://expressjs.com/'
    },
    {
      id:7,
      name: 'MySql',
      icon: <SiMysql color={'white'} width={20} height={20} />,
      color: '#4479A1',
      link: 'https://www.mysql.com/'
    },
    {
      id:8,
      name: 'Git',
      icon: <SiGit color={'white'} width={20} height={20} />,
      color: '#F4511E',
      link: 'https://git-scm.com/'
    },
    {
      id:9,
      name: 'Github',
      icon: <SiGithub color={'white'} width={20} height={20} />,
      color: '#494A4A',
      link: 'https://github.com/'
    }
  ];

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <article className={'first-project flex flex-col items-center overflow-hidden relative'}>
      {/*<BackgroundGradientAnimation></BackgroundGradientAnimation>*/}
      <WavyBackground backgroundFill={'rgb(239,239,245)'}>
        <ContainerScroll
          image={AmanaInsurance}
          titleComponent={
            <div>
              <Badge variant={'secondary'} className={'mx-auto'}>web application</Badge>
              <p className={'font-sfPro text-gray-400 mt-5'}>You can add what outcomes has this project brought after
                your
                design! For example, can show some real data.</p>
              <div className={'used-techs flex items-center justify-center mt-5'}>
                <h3 className={'capitalize font-sfPro font-bold text-lg mr-5'}>stack&nbsp;&nbsp;&nbsp;:</h3>
                <AnimatedTechTooltip items={usedTechs} size={14}/>
              </div>
              <div className={'mt-5'}>
                <MovingBorderButton
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-90 dark:text-white border-none dark:border-slate-800"
                >
                  Tell Me More <ArrowTopRightIcon />
                </MovingBorderButton>
              </div>
              {/*<Button variant={'secondary'} className={'mt-5 gap-x-1'}>Tell Me More <ArrowTopRightIcon/></Button>*/}
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                {/*Unleash the power of <br />*/}
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Amana Insurance
              </span>
              </h1>
            </div>
          }
        />
        <ParticlesBg type="cobweb" bg={true} color={"#0DB760"}/>
      </WavyBackground>
      <div className="absolute bottom-0 w-screen h-[650px] bg-gradient-to-t from-background to-100% z-10" />

    </article>
  );
}


export const users = [
  {
    name: 'Manu Arora',
    designation: 'Founder, Algochurn',
    image: 'https://picsum.photos/id/10/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Sarah Singh',
    designation: 'Founder, Sarah\'s Kitchen',
    image: 'https://picsum.photos/id/11/300/300',
    badge: 'Mentor'
  },
  {
    name: 'John Doe',
    designation: 'Software Engineer, Tech Corp',
    image: 'https://picsum.photos/id/12/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Jane Smith',
    designation: 'Product Manager, Innovate Inc',
    image: 'https://picsum.photos/id/13/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Robert Johnson',
    designation: 'Data Scientist, DataWorks',
    image: 'https://picsum.photos/id/14/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Emily Davis',
    designation: 'UX Designer, DesignHub',
    image: 'https://picsum.photos/id/15/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Michael Miller',
    designation: 'CTO, FutureTech',
    image: 'https://picsum.photos/id/16/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Sarah Brown',
    designation: 'CEO, StartUp',
    image: 'https://picsum.photos/id/17/300/300'
  },
  {
    name: 'James Wilson',
    designation: 'DevOps Engineer, CloudNet',
    image: 'https://picsum.photos/id/18/300/300',
    badge: 'Something'
  },
  {
    name: 'Patricia Moore',
    designation: 'Marketing Manager, MarketGrowth',
    image: 'https://picsum.photos/id/19/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Richard Taylor',
    designation: 'Frontend Developer, WebSolutions',
    image: 'https://picsum.photos/id/20/300/300'
  },
  {
    name: 'Linda Anderson',
    designation: 'Backend Developer, ServerSecure',
    image: 'https://picsum.photos/id/21/300/300'
  },
  {
    name: 'William Thomas',
    designation: 'Full Stack Developer, FullStack',
    image: 'https://picsum.photos/id/22/300/300',
    badge: 'Badger'
  },
  {
    name: 'Elizabeth Jackson',
    designation: 'Project Manager, ProManage',
    image: 'https://picsum.photos/id/23/300/300',
    badge: 'Mentor'
  },
  {
    name: 'David White',
    designation: 'Database Administrator, DataSafe',
    image: 'https://picsum.photos/id/24/300/300',
    badge: 'Advocate'
  },
  {
    name: 'Jennifer Harris',
    designation: 'Network Engineer, NetConnect',
    image: 'https://picsum.photos/id/25/300/300'
  },
  {
    name: 'Charles Clark',
    designation: 'Security Analyst, SecureIT',
    image: 'https://picsum.photos/id/26/300/300'
  },
  {
    name: 'Susan Lewis',
    designation: 'Systems Analyst, SysAnalyse',
    image: 'https://picsum.photos/id/27/300/300'
  },
  {
    name: 'Joseph Young',
    designation: 'Mobile Developer, AppDev',
    image: 'https://picsum.photos/id/28/300/300',
    badge: 'Mentor'
  },
  {
    name: 'Margaret Hall',
    designation: 'Quality Assurance, BugFree',
    image: 'https://picsum.photos/id/29/300/300',
    badge: 'Developer'
  }
];

export default ThirdProject;
