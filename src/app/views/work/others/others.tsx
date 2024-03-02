import styles from './others.module.scss';
import { ProjectCard, ProjectCardProps } from '@/components/ui/project-card';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { cn } from '@/lib/utils';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import {
  Ecommerce,
  HotelManagement,
  MondeEnBouche,
  MunicipalityManagement,
  TennisCLub
} from '../../../../assets/images';
import {
  SiAndroid,
  SiAngular, SiExpress, SiFigma, SiFirebase, SiMongodb, SiMui,
  SiMysql,
  SiNodedotjs,
  SiOracle,
  SiReact,
  SiSpring
} from '@icons-pack/react-simple-icons';
import { FaJava } from 'react-icons/fa';
import React from 'react';
import { Tabs } from '@/components/ui/tabs';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

/* eslint-disable-next-line */
export interface OthersProps {
}

const cards: ProjectCardProps[] = [
  {
    title:'Complaints management for an Hotel',
    image:HotelManagement,
    stack:[
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
    ],
  },
  {
    title:'Municipality management',
    image:MunicipalityManagement,
    stack:[

      {id:1, name: 'Java', icon: <FaJava color={'white'} size={20}/>, color: '#0878bf', link: 'https://www.java.com/en/' },
      {id:2,name:'OracleDB',icon:<SiOracle color={"white"}/>,color:"#F80000",link:"https://www.oracle.com/database/"},
    ],
  },
  {
    title:'Tennis Club App',
    image:TennisCLub,
    stack:[

      {id:1, name: 'React', icon: <SiReact color={'white'} />, color: '#00DCFF', link: 'https://reactjs.org/' },
      {id:2, name: 'NodeJs', icon: <SiNodedotjs color={'white'} />, color: '#4CAF50', link: 'https://nodejs.org/en' },
      {id:3, name: 'Express', icon: <SiExpress color={'white'} />, color: '#212121', link: 'https://expressjs.com/' },
      {id:4, name: 'Mui', icon: <SiMui color={'white'} />, color: '#007FFF', link: 'https://mui.com/' },
      {id:5,name:'MongoDb',icon:<SiMongodb color={"white"}/>,color:"#47A248",link:"https://www.mongodb.com"},
    ],
  },
  {
    title:'E-Commerce App',
    image:Ecommerce,
    stack:[
      {id:1, name: 'Android', icon: <SiAndroid color={'white'} />, color: '#34A853', link: 'https://www.android.com/' },
      {id:2, name: 'Java', icon: <FaJava color={'white'} size={20}/>, color: '#0878bf', link: 'https://www.java.com/en/' },
      {id:3, name: 'Firebase', icon: <SiFirebase color={'white'} />, color: '#FFCA28', link: 'https://firebase.google.com/' },
    ],
  },

]

export function Others(props: OthersProps) {

  return (
    <article className={'relative'}>
      <div className={'content p-28 flex flex-col gap-0'}>
        <h1 className={'font-sfPro font-bold capitalize text-5xl z-0'}>more works.</h1>
        {/*<InfiniteMovingCards items={cards} speed={"fast"} className={"place-self-center"}/>*/}
        <div className="h-[20rem] md:h-[43rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-5 mb-10">
          <Tabs tabs={cards}/>
        </div>
      </div>
    </article>
  );
}





export default Others;
