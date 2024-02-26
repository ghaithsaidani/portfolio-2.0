import styles from './navbar.module.scss';
import { NavbarAvatar } from '../../../assets/images';
import { customLink } from '@/ts/custom-link';
import { Link } from "react-scroll";
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const links: customLink[] = [
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
    <nav className={'flex fixed justify-between bg-background items-center z-30 w-full py-2 px-32'}>
      <div className={'navbar-avatar overflow-hidden relative w-16 h-16 bg-primary rounded-full'}>
        <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1'}/>
      </div>
      <ul className={"list-none flex gap-10 text-gray-400"}>
        {links.map((link) => (
          <li key={link.id}>
            <Link className={'font-sfPro relative flex text-xl cursor-pointer capitalize hover:text-black before:h-1 before:rounded-xl before:w-[15px] before:absolute before:-bottom-1 justify-center before:hidden hover:before:flex before:transition-all hover:before:bg-black before:duration-1000'} activeClass="active" smooth spy duration={0} to={link.id}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <button className={'font-sfPro hover:border-primary border-2 rounded-md px-5 py-2 transition-all duration-500 hover:bg-white'}>Download CV</button>
    </nav>
  );
}

export default Navbar;
