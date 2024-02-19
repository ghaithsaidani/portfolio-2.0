import styles from './skills.module.scss';
import { Card, CardContent } from '@/components/ui/card';
import {
  SiAndroid,
  SiAngular, SiC, SiCsharp, SiCss3, SiDjango, SiExpress, SiFigma, SiGit,
  SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMui, SiMysql, SiNodedotjs, SiOracle, SiPostgresql,
  SiReact,
  SiSass, SiSpring, SiTailwindcss, SiTypescript
} from '@icons-pack/react-simple-icons';
import { IconInterface } from '@/ts/icon.type';
import { FaJava } from 'react-icons/fa';
import React from 'react';

/* eslint-disable-next-line */
export interface SkillsProps {
}

export function Skills(props: SkillsProps) {
  const everyDayTechs: IconInterface[] = [
    { name: 'Angular', icon: <SiAngular color={'white'}/>, color: '#DE002D', link: 'https://angular.io/' },
    { name: 'React', icon: <SiReact color={'white'} />, color: '#00DCFF', link: 'https://reactjs.org/' },
    {
      name: 'HTML',
      icon: <SiHtml5 color={'white'} />,
      color: '#FF6D00',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      name: 'CSS',
      icon: <SiCss3 color={'white'} />,
      color: '#039BE5',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      name: 'Javascript',
      icon: <SiJavascript color={'white'} />,
      color: '#FFD600',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'typescript',
      icon: <SiTypescript color={'white'} />,
      color: '#1976D2',
      link: 'https://www.typescriptlang.org/'
    },
    {name: 'Java', icon: <FaJava color={'white'} size={24} title={'Java'}/>, color: '#0878bf', link: 'https://www.java.com/en/' },
    { name: 'Git', icon: <SiGit color={'white'}/>, color: '#F4511E', link: 'https://git-scm.com/' },
    { name: 'Github', icon: <SiGithub color={'white'} />, color: '#494A4A', link: 'https://github.com/' },
    { name: 'Sass', icon: <SiSass color={'white'} />, color: '#F06292', link: 'https://sass-lang.com/' },
    { name: 'NodeJs', icon: <SiNodedotjs color={'white'} />, color: '#4CAF50', link: 'https://nodejs.org/en' },
    { name: 'Figma', icon: <SiFigma color={'white'} />, color: '#F24E1E', link: 'https://www.figma.com/' },
    { name: 'Express', icon: <SiExpress color={'white'} />, color: '#212121', link: 'https://expressjs.com/' },
    { name: 'Mui', icon: <SiMui color={'white'} />, color: '#007FFF', link: 'https://mui.com/' },
    { name: 'MySql', icon: <SiMysql color={'white'} />, color: '#4479A1', link: 'https://www.mysql.com/' }
  ];
  const usedTechs: IconInterface[] = [
    { name: 'Android', icon: <SiAndroid color={'white'} />, color: '#34A853', link: 'https://www.android.com/' },
    { name: 'C', icon: <SiC color={'white'} />, color: '#A8B9CC', link: 'https://fr.wikipedia.org/wiki/C_(langage)' },
    {name:'MongoDb',icon:<SiMongodb color={"white"}/>,color:"#47A248",link:"https://www.mongodb.com"},
    {name:'PostgreSql',icon:<SiPostgresql color={"white"}/>,color:"#4169E1",link:"https://www.postgresql.org/"},
    {name:'Oracle Database',icon:<SiOracle color={"white"}/>,color:"#F80000",link:"https://www.oracle.com/database/"},
    {name:'Spring Boot',icon:<SiSpring color={"white"}/>,color:"#6DB33F",link:"https://spring.io/"},
    {name:'Tailwind',icon:<SiTailwindcss color={"white"}/>,color:"#06B6D4",link:"https://tailwindcss.com/"},
    {name:'C#',icon:<SiCsharp color={"white"}/>,color:"#512BD4",link:"https://learn.microsoft.com/en-us/dotnet/csharp/"},
    {name:'Django',icon:<SiDjango color={"white"}/>,color:"#092E20",link:"https://www.djangoproject.com/"},
  ]
  //technologies(tech.map() => tech.icon.props.color = '#fff')
  return (
    <article className={'flex-1 flex flex-col align-middle px-24 py-5 gap-5'}>
      <div className={'text-center flex flex-col gap-5'}>
        <h2 className={'font-sfPro font-bold text-2xl'}>Skills</h2>
        <p className={'font-sfPro text-gray-400 text-md px-24'}>I have acquired a wide range of skills through
          education, training, and experience. I am always eager to learn new skills and improve my existing ones.</p>
      </div>
      <Card className={'text-center h-full'}>
        <CardContent className={"flex flex-col justify-between"}>
          <div>
            <h3 className={'font-sfPro font-bold text-xl'}>Technologies that I’m using every Day</h3>
            <ul className={'flex flex-wrap gap-x-4 gap-y-10 w-fit px-16 justify-center mt-8'}>
              {everyDayTechs.map((tech) =>

                <a href={tech.link} target={'_blank'} rel={'noreferrer'} key={tech.name}>
                  <li className={'p-3 rounded'} style={{ background: tech.color }}>{tech.icon}</li>
                </a>
              )}
            </ul>
          </div>
          <div>
            <h3 className={'font-sfPro font-bold text-xl'}>Other Technologies which I have used in projects</h3>
            <ul className={'flex flex-wrap gap-x-8 gap-y-10 w-fit px-20 justify-center mt-8'}>
              {usedTechs.map((tech) =>

                <a href={tech.link} target={'_blank'} rel={'noreferrer'} key={tech.name}>
                  <li className={'p-3 rounded'} style={{ background: tech.color }}>{tech.icon}</li>
                </a>
              )}
            </ul>
          </div>
        </CardContent>
        {/*<div className={"flex flex-col gap-5"}>
            <h2 className={"font-sfPro font-bold text-2xl"}>Technical Skills</h2>
            <p className={"font-sfPro text-gray-400 text-md"}>
              I have experience in a variety of programming languages and tools. I am comfortable working with both
              front-end and back-end technologies. I am also familiar with various databases and cloud services. I am
              always looking to expand my technical skillset and learn new technologies.
            </p>
          </div>*/}

      </Card>
    </article>
  );
}

export default Skills;
