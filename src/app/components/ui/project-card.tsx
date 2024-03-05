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
  link: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className="w-full overflow-hidden relative h-[90%] rounded-2xl p-10 text-xl md:text-4xl text-white bg-primary">
      <div className={'flex w-full items-center justify-between'}>
        <p className={'font-bold'}>{props.title}</p>
        <MovingBorderButton
          borderRadius="1.75rem"
          className="bg-white text-black dark:bg-slate-90 border-none"

          borderClassName={'group-hover:bg-[radial-gradient(rgb(0,0,0)_60%,rgba(0,0,0,0.3)_40%)]'}
        >
          <a className={'flex items-center gap-2'} href={props.link} target={'_blank'} rel={'noreferrer'}>Tell Me More <ArrowTopRightIcon /></a>
        </MovingBorderButton>
      </div>
      <div className={'used-techs flex items-center justify-center mt-5 absolute top-36 z-30 right-20'}>
        <AnimatedTechTooltip items={props.stack} size={12}/>
      </div>
      <img
        src={props.image}
        alt={props.title}

        className=" w-[95%] object-fill object-center h-[60%]  md:h-[85%] absolute -bottom-10 inset-x-0 rounded-xl mx-auto"
      />

    </div>
  )
    ;
};