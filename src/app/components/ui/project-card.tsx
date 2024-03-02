import { Card, CardContent } from '@/components/ui/card';
import { HotelManagement } from '../../../assets/images';
import { AnimatedTechTooltip, IconType } from '@/components/ui/animated-tech-tooltip';
import {
  SiAndroid,
  SiAngular,
  SiFigma,
  SiJavascriptHex,
  SiMysql,
  SiSpring,
  SiTypescript
} from '@icons-pack/react-simple-icons';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { DiJava } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { LiaJava } from 'react-icons/lia';

export interface ProjectCardProps {
  title: string;
  image: string;
  stack: IconType[];

}

export const ProjectCard = (props: ProjectCardProps) => {
  const usedTechs: IconType[] = [
    {
      id: 1,
      name: 'Angular',
      icon: <SiAngular color={'white'} width={20} height={20} />,
      color: '#DE002D',
      link: 'https://angular.io/'
    },
    {
      id: 2,
      name: 'Spring Boot',
      icon: <SiSpring color={'white'} />,
      color: '#6DB33F',
      link: 'https://spring.io/'
    },
    { id: 3, name: 'MySql', icon: <SiMysql color={'white'} />, color: '#4479A1', link: 'https://www.mysql.com/' },
    { id: 4, name: 'Android', icon: <SiAndroid color={'white'} />, color: '#34A853', link: 'https://www.android.com/' },
    {
      id: 5,
      name: 'Java',
      icon: <FaJava color={'white'} size={20} />,
      color: '#0878bf',
      link: 'https://www.java.com/en/'
    }

  ];
  return (
    <div
      className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl text-white bg-primary">
      <div className={'flex w-full items-center justify-between'}>
        <p className={'font-bold'}>{props.title}</p>
        <MovingBorderButton
          borderRadius="1.75rem"
          className="bg-white text-black dark:bg-slate-90 border-none "

          borderClassName={'group-hover:bg-[radial-gradient(rgb(0,0,0)_60%,rgba(0,0,0,0.3)_40%)]'}
        >
          Tell Me More <ArrowTopRightIcon />
        </MovingBorderButton>
      </div>
      <div className={'used-techs flex items-center justify-center mt-5 absolute top-36 z-30 right-20'}>
        <AnimatedTechTooltip items={props.stack} size={12} />
      </div>
      <img
        src={props.image}
        alt={props.title}
        width="1000"
        height="1000"
        className="object-fill object-left-top h-[60%]  md:h-[85%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />

    </div>
  )
    ;
};