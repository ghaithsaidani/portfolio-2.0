import styles from './footer.module.scss';
import { IconInterface } from '@/ts/icon.type';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialMedias: IconInterface[] = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn className={'w-5 h-5 lg:h-5 lg:w-5'}/>,
      color: 'linkedin',
      link: 'https://www.linkedin.com/in/ghaith-saidani-9230571b2/'
    },
    {
      name: 'Github',
      icon: <FaGithub className={'w-5 h-5 lg:h-5 lg:w-5'}/>,
      color: 'github',
      link: 'https://github.com/ghaithsaidani'
    },
    {
      name: 'LeetCode',
      icon: <TbBrandLeetcode className={'w-5 h-5 lg:h-5 lg:w-5'}/>,
      color: 'leetCode',
      link: 'https://leetcode.com/ghaith_saidani/'
    }
  ];
  return (
    <footer className={'h-14 flex items-center px-5 justify-between'}>
      <p className={'text-inter text-xs'}>© 2024 Ghaith Saidani. All rights reserved.</p>
      <button className={'flex items-center gap-1 text-inter text-sm'}>
        <Link to={'home'} smooth duration={0}>
          Back up
        </Link>
        <ArrowUp width={15}/>
      </button>

    </footer>
  );
}

export default Footer;
