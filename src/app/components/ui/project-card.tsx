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
import { useMediaQuery } from '@/hooks/use-mediaQuery';

export interface ProjectCardProps {
  title: string;
  image: string;
  stack: IconType[];
  link: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const isLg=useMediaQuery('(min-width: 1024px)')
  return (
    <div
      className="w-full overflow-hidden relative h-full sm:h-[120%] lg:h-[90%] rounded-2xl px-3 md:px-8 py-8  text-white bg-primary">
      <div className={'flex w-full items-center justify-between'}>
        <p className={'font-bold text-sm lg:text-4xl'}>{props.title}</p>{/*
        <a className={'mt-5 flex items-center gap-2'} href={props.link} target={'_blank'}
           rel={'noreferrer'}>
          <MovingBorderButton
            borderRadius="1.75rem"
            containerClassName={'w-32'}
            borderClassName={'group-hover:bg-[radial-gradient(rgb(0,0,0)_60%,rgba(0,0,0,0.3)_40%)]'}
            className="bg-white text-black dark:bg-slate-90 border-none text-xs sm:text-sm">
            Tell Me More <ArrowTopRightIcon className={'w-3 sm:w-4'} />
          </MovingBorderButton></a>*/}
        <a className={'flex items-center gap-2'} href={props.link} target={'_blank'} rel={'noreferrer'}>
          <MovingBorderButton
            borderRadius="1.75rem"
            containerClassName={'w-28'}
            className="bg-white text-xs sm:text-sm text-black dark:bg-slate-90 border-none"
            borderClassName={'group-hover:bg-[radial-gradient(rgb(0,0,0)_60%,rgba(0,0,0,0.3)_40%)]'}
          >
            Tell Me
            More <ArrowTopRightIcon />
          </MovingBorderButton></a>
      </div>
      <div
        className={'used-techs flex items-center justify-center mt-5 absolute top-[40%] lg:top-[25%] z-30 right-[8%]'}>
        <AnimatedTechTooltip items={props.stack} size={isLg ? 12 : 9} />
      </div>
      <img
        src={props.image}
        alt={props.title}

        className=" w-[95%] object-cover lg:object-fill object-center h-[80%]  md:h-[85%] absolute -bottom-10 inset-x-0 rounded-xl mx-auto"
      />

    </div>
  )
    ;
};