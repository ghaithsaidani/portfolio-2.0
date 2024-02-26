import styles from './home.module.scss';
import { Spotlight } from '@/components/ui/spotlight';
import { PersonalPhoto } from '../../../assets/images';
import {  MovingBorderButton } from '@/components/ui/moving-border-button';
import { IoArrowDownCircleOutline } from 'react-icons/io5';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';

import { loadSlim } from "@tsparticles/slim";
import ParticlesBg from 'particles-bg'

/* eslint-disable-next-line */
export interface HomeProps {
}

export function Home(props: HomeProps) {
  return (
    <section className={'home h-screen'}>
      <article className={'flex py-20 h-screen justify-center items-center gap-20'}>
        <div className={'description w-2/5'}>
          <h1 className={'font-sfProBold text-6xl'}>I'm Ghaith Saidani<br />
            <span className={'text-primary'}>Front-end</span>
            &nbsp;Developer
          </h1>
          <p className={'font-sfPro text-gray-400 text-md pr-52 mt-3'}>I am a student and a multi-talented
            individual who specializes in web development and UI/UX design. With a strong passion for creating
            user-centered and visually appealing digital experiences, I strive to combine technical skills and
            design aesthetics to bring ideas to life. I hope you enjoy exploring my portfolio as much as I enjoyed
            creating it. &#x1F600;</p>
          <div className={'flex gap-5 mt-12'}>
            <MovingBorderButton borderRadius="1.75rem"
                                className="bg-primary hover:bg-white  hover:text-primary transition-colors duration-500 text-white border-none">Say Hi &#x1F44B;</MovingBorderButton>
            <MovingBorderButton borderRadius="1.75rem"
                                containerClassName={'w-52'}
                                className=" bg-transparent hover:bg-white  hover:text-primary border-none" borderClassName={"transition-colors duration-1000"}>
              Discover my works 🧑‍💻{/*<IoMdArrowDropdownCircle/>*/}
            </MovingBorderButton>
          </div>
        </div>
        <aside className={'h-[70%] relative'}>
          <img className={'h-full'} src={PersonalPhoto} alt={'home personal'} />
          <div
            className={'absolute w-full h-[90%] bg-primary -z-10 bottom-0 rounded-xl before:w-full before:h-full before:absolute before:border-[3px] before:border-black before:top-10 before:right-20 before:rounded-xl'}></div>
        </aside>
      </article>
    </section>
  );
}

export default Home;
