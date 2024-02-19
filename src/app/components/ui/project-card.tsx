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
  description: string;
  types: string[];
  stack: IconType[];

}
export const ProjectCard = (props:ProjectCardProps) => {
  const usedTechs: IconType[] = [
    {
      id: 1,
      name: 'Angular',
      icon: <SiAngular color={'white'} width={20} height={20} />,
      color: '#DE002D',
      link: 'https://angular.io/'
    },
    {
      id:2,
      name: 'Spring Boot',
      icon: <SiSpring color={'white'} />,
      color: '#6DB33F',
      link: 'https://spring.io/'
    },
    {id:3, name: 'MySql', icon: <SiMysql color={'white'} />, color: '#4479A1', link: 'https://www.mysql.com/' },
    {id:4, name: 'Android', icon: <SiAndroid color={'white'} />, color: '#34A853', link: 'https://www.android.com/' },
    {id:5, name: 'Java', icon: <FaJava color={'white'} size={20}/>, color: '#0878bf', link: 'https://www.java.com/en/' },

  ];
  return (
    <Card className={'p-[20px] w-fit flex z- rounded-[50px] bg-white/50'}>
      <CardContent className={'relative bg-transparent'}>
        <img src={props.image} alt={'hotel management'} className={'rounded-[30px] h-64 w-full'} />
          <div className={'absolute used-techs flex w-fit top-3 right-7'}>
            <AnimatedTechTooltip items={props.stack} size={10} />
          </div>
        <h3 className={'text-lg font-sfPro font-bold mt-5'}>{props.title}</h3>
        <p className={'font-sfPro text-gray-400 text-sm mt-2'}>{props.description}</p>
        <div className={'mt-7 flex justify-between'}>
          <div className={'flex gap-3'}>
            {props.types.map((type, idx) => {
              return <Badge key={idx} variant={'secondary'} className={'rounded-3xl py-0'}>{type}</Badge>
            })}
          </div>
          <MovingBorderButton
            containerClassName={'h-10 w-32'}
            borderClassName={'h-14 w-14'}
            borderRadius="1.75rem"
            className="bg-white text-sm dark:bg-slate-90 dark:text-white border-none dark:border-slate-800"
          >
            Tell Me More <ArrowTopRightIcon />
          </MovingBorderButton>
        </div>
      </CardContent>
    </Card>
  )
    ;
};