import { PersonalPhoto, PersonalPhoto1, PersonalPhotoBlurred } from '../../../assets/images';
import React, { useState } from 'react';
import { IconInterface } from '@/ts/icon.type';
import { Separator } from '@/components/ui/separator';
import { Reveal } from '@/components/ui/reveal';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { TbBrandLeetcode } from 'react-icons/tb';
import { HoverBorderGradient } from '@/components/ui/hover.border-gradient';
import { Button } from '@/components/ui/button';
import { Linkedin,Github } from 'lucide-react';
import ParticlesBg from 'particles-bg';

/* eslint-disable-next-line */
export interface HomeProps {
}

export function Home(props: HomeProps) {
  const [loaded,setLoaded] = useState(false);
  const socialMedias: IconInterface[] = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className={'w-3 h-3 sm:w-4 sm:h-4 lg:h-5 lg:w-5'} />,
      color: 'linkedin',
      link: 'https://www.linkedin.com/in/ghaith-saidani-9230571b2/'
    },
    {
      name: 'Github',
      icon: <Github className={'w-3 h-3 sm:w-4 sm:h-4 lg:h-5 lg:w-5'} />,
      color: 'github',
      link: 'https://github.com/ghaithsaidani'
    },
    {
      name: 'LeetCode',
      icon: <TbBrandLeetcode className={'w-3 h-3 sm:w-4 sm:h-4 lg:h-5 lg:w-5'} />,
      color: 'leetCode',
      link: 'https://leetcode.com/ghaith_saidani/'
    }
  ];
  return (
    <section className={'home h-[100dvh] lg:h-screen'}>
      <article
        className={'flex flex-col-reverse justify-start lg:justify-center gap-[5%] lg:flex-row py-14 lg:py-20 xl:px-14 2xl:px-0 h-screen items-center 2xl:gap-20 '}>
        <div className={'description flex flex-col items-center lg:items-start w-3/4 xl:w-3/5 2xl:w-2/5'}>
          <h1
            className={'font-sfPro text-[1rem] lg:text-[1.5rem] 2xl:text-[2rem] flex flex-col items-center lg:items-start'}>
            <Reveal className={'py-2'}><span
              className={'text-xl sm:text-3xl lg:text-4xl xl:text-6xl 2xl:text-[4rem] font-poetsenOne'}>Hey, I'm Ghaith<span
              className={'text-primary'}>.</span></span></Reveal>
            <Reveal>
              I'm&nbsp;
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1500,
                  'Cloud & Cyber Security Student',
                  1500
                ]}
                wrapper="span"
                speed={5}
                style={{ display: 'inline-block', color: 'hsl(var(--primary))', textAlign: 'center' }}
                repeat={Infinity}
              />
            </Reveal>
          </h1>

          <Reveal className={'py-1 sm:py-3'}><p
            className={'font-sfPro text-gray-400 text-[0.7rem] sm:text-[0.85rem] leading-6 lg:pr-52 sm:mt-3 text-center lg:text-left'}>
            I am a student and a multi-talented individual who specializes in
            web development and UI/UX design. With a strong passion for creating
            user-centered and visually appealing digital experiences, I strive
            to combine technical skills and design aesthetics to bring ideas to
            life. I hope you enjoy exploring my portfolio as much as I enjoyed
            creating it. &#x1F600;
          </p></Reveal>
          <Reveal>
            <div className={'flex gap-5 sm:mt-12'}>
              <Link offset={-80} to={'contacts'} smooth={true} duration={500}>

                <Button
                  className="font-sfPro w-24 h-11 sm:w-36 sm:h-12 2xl:w-40 2xl:h-14 rounded-[1.75rem] bg-primary text-xs sm:text-sm 2xl:text-base hover:text-background hover:bg-foreground border-[1px] border-transparent hover:border-border transition-colors duration-1000 text-white"
                >
                  Say Hi &#x1F44B;
                </Button></Link>
              <Link offset={-80} to={'work'} smooth={true} duration={500}>
                <HoverBorderGradient
                  containerClassName="rounded-full w-[150px] sm:w-44 2xl:w-52 h-11 sm:h-12 2xl:h-14"
                  as="button"
                  className="bg-background text-xs sm:text-sm 2xl:text-base w-full h-full text-foreground flex items-center space-x-2 transition-colors duration-1000"
                >
                  <span>Discover my works 🧑‍💻</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </Reveal>
        </div>

        <aside className={'h-[30%] md:h-[45%] lg:h-[60%] 2xl:h-[70%] flex items-center gap-5 lg:gap-14 2xl:gap-20'}>
          <div className={'h-full relative'}>
            <img
              className={'h-full transition-opacity duration-500 ease-in-out'}
              src={PersonalPhoto1}
              alt={'home personal'}
              loading={"lazy"}
              style={{opacity: loaded ? 1 : 0}}
              onLoad={() => setLoaded(true)}
            />
            {!loaded && (
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-lg"
                style={{ backgroundImage: `url(${PersonalPhotoBlurred})` }}
              ></div>
            )}
            <div
              className={
                'absolute w-full h-[90%] bg-primary -z-10 bottom-0 rounded-xl before:w-full before:h-full before:absolute before:border-[3px] before:border-black dark:before:border-white before:top-4 sm:before:top-8 lg:before:top-10  before:right-4 sm:before:right-5 lg:before:right-10 before:rounded-xl'
              }
            ></div>
          </div>
          <div
            className={
              'social-medias flex flex-col justify-center items-center gap-4 lg:gap-8 h-fit 2xl:h-full'
            }
          >
            <div
              className={'font-sfPro text-[0.65rem] sm:text-[0.7rem] lg:text-[0.85rem] 2xl:text-[1rem] flex text-primary text-nowrap'}
              style={{ writingMode: 'vertical-rl' }}
            >
              Follow me on:
            </div>
            <Separator orientation={'vertical'} className={'h-8 sm:h-20 md:h-32 bg-primary'} />
            <ul className={'grid gap-y-4'}>
              {socialMedias.map((socialMedia) => (
                <li
                  key={socialMedia.name}
                  className={`flex group relative bg-transparent border-[1px] border-primary text-primary hover:border-transparent social cursor-pointer items-center justify-center h-6 w-6 sm:h-8 sm:w-8 xl:h-10 xl:w-10 2xl:h-[120%] 2xl:w-[120%] rounded-full p-2 transition-colors duration-500  hover:bg-transparent hover:text-white overflow-hidden`}
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
