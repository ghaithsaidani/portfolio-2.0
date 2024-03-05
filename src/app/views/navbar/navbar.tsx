import styles from './navbar.module.scss';
import { NavbarAvatar } from '../../../assets/images';
import { customLinkType } from '@/ts/custom-link.type';
import { Link } from "react-scroll";
import { Resume } from '../../../assets/pdfs';
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const links: customLinkType[] = [
    {
      id: "home",
      text: "home",
    },
    {
      id: "about",
      text: "about",
    },
    {
      id: "work",
      text: "work",
    },
    {
      id: "contacts",
      text: "contacts",
    },
  ];
  return (
    <nav className={'flex fixed justify-between bg-background items-center z-30 w-full py-4 px-44'}>
      <div className={'navbar-avatar overflow-hidden relative w-12 h-12 bg-primary rounded-full'}>
        <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1'}/>
      </div>
      <ul className={"list-none flex gap-10 text-gray-400 group"}>
        {links.map((link) => (
          <li key={link.id}>
            <Link offset={-80} className={'font-sfPro relative flex text-xl cursor-pointer capitalize hover:text-black justify-center'} activeClass="active" smooth spy duration={0} to={link.id}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <a download={"Saidani Ghaith Resume"} href={Resume}>
        <button
          className={'font-sfPro bg-primary text-white border-transparent hover:border-primary hover:bg-transparent hover:text-black border-2 rounded-md px-5 py-2 transition-colors duration-500'}>
          Download CV
        </button>
      </a>
    </nav>
  );
}

export default Navbar;
