import styles from './home.module.scss';
import { Spotlight } from '@/components/ui/spotlight';
import { PersonalPhoto } from '../../../assets/images';
import { MovingBorderButton } from '@/components/ui/moving-border-button';
import { IoArrowDownCircleOutline } from 'react-icons/io5';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';

import { loadSlim } from '@tsparticles/slim';
import ParticlesBg from 'particles-bg';
import { FaceIcon } from '@radix-ui/react-icons';
import { SiFacebook, SiLeetcode, SiLinkedin } from 'react-icons/si';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { IconInterface } from '@/ts/icon.type';
import { FaLinkedinIn } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import { Reveal } from '@/components/ui/reveal';

/* eslint-disable-next-line */
export interface HomeProps {
}

export function Home(props: HomeProps) {
  const socialMedias: IconInterface[] = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn width={14} height={14} />,
      color: 'linkedin',
      link: 'https://www.linkedin.com/in/ghaith-saidani-9230571b2/'
    },
    {
      name: 'Github',
      icon: <SiGithub className="z-40" width={14} height={14} />,
      color: 'github',
      link: 'https://github.com/ghaithsaidani'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode width={14} height={14} />,
      color: 'leetCode',
      link: 'https://leetcode.com/ghaith_saidani/'
    }
  ];
  return (
    <section className={'home h-screen'}>
      <article
        className={'flex py-20 h-screen justify-center items-center gap-20'}
      >

        <div className={'description w-2/5'}>

            <h1 className={'font-sfPro text-4xl'}>
              <Reveal><span className={'text-8xl font-poetsenOne'}>Hey, I'm Ghaith<span className={'text-primary'}>.</span></span></Reveal>
              <Reveal>I'm&nbsp;
                <span className={'text-primary'}>Front-end Developer</span></Reveal>
            </h1>

            <Reveal><p className={'font-sfPro text-gray-400 text-md pr-52 mt-3'}>
              I am a student and a multi-talented individual who specializes in
              web development and UI/UX design. With a strong passion for creating
              user-centered and visually appealing digital experiences, I strive
              to combine technical skills and design aesthetics to bring ideas to
              life. I hope you enjoy exploring my portfolio as much as I enjoyed
              creating it. &#x1F600;
            </p></Reveal>
            <Reveal><div className={'flex gap-5 mt-12'}>
              <MovingBorderButton
                borderRadius="1.75rem"
                className="bg-primary hover:bg-white  hover:text-primary transition-colors duration-500 text-white border-none"
              >
                Say Hi &#x1F44B;
              </MovingBorderButton>
              <MovingBorderButton
                borderRadius="1.75rem"
                containerClassName={'w-52'}
                className=" bg-transparent hover:bg-white  hover:text-primary border-none"
                borderClassName={'transition-colors duration-1000'}
              >
                Discover my works 🧑‍💻{/*<IoMdArrowDropdownCircle/>*/}
              </MovingBorderButton>
            </div></Reveal>
        </div>

        <aside className={'h-[70%] flex gap-20'}>
          <div className={'h-full relative'}>
            <img
              className={'h-full'}
              src={PersonalPhoto}
              alt={'home personal'}
            />
            <div
              className={
                'absolute w-full h-[90%] bg-primary -z-10 bottom-0 rounded-xl before:w-full before:h-full before:absolute before:border-[3px] before:border-black before:top-10 before:right-20 before:rounded-xl'
              }
            ></div>
          </div>
          <div
            className={
              'social-medias flex flex-col justify-center items-center gap-8'
            }
          >
            <div
              className={'font-sfPro text-xl flex text-primary'}
              style={{ writingMode: 'vertical-rl' }}
            >
              Follow me on:
            </div>
            <Separator orientation={'vertical'} className={'h-32 bg-primary'} />
            <ul className={'grid gap-y-4'}>
              {socialMedias.map((socialMedia) => (
                <li
                  key={socialMedia.name}
                  className={`grid group relative social cursor-pointer place-items-center h-12 w-12 rounded-full p-2 bg-primary transition-colors duration-500 bg-white text-primary hover:bg-transparent hover:text-white overflow-hidden`}
                >
                  <a
                    href={socialMedia.link}
                    target={'_blank'}
                    rel={'noreferrer'}
                    data-social={socialMedia.name}
                  >
                    <div
                      className={`filled absolute h-0 w-full bottom-0 left-0 transition-all duration-500 -z-10 group-hover:h-full`}></div>
                    {socialMedia.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Home;
