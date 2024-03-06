import { NavbarAvatar } from '../../../assets/images';
import { customLinkType } from '@/ts/custom-link.type';
import { Link } from "react-scroll";
import { Resume } from '../../../assets/pdfs';
import { useTheme } from '@/hooks/use-theme';
import { Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const { setTheme } = useTheme()
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
            <Link offset={-80} className={'font-sfPro relative flex text-xl cursor-pointer capitalize hover:text-foreground justify-center'} activeClass="active" smooth spy duration={0} to={link.id}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className={'flex items-center justify-center gap-10'}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className={'focus-visible:outline-none'}>
            <button className={'w-[1.2rem] h-[1.2rem] relative flex items-center justify-center'}>
              <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <a download={'Saidani Ghaith Resume'} href={Resume}>
          <button
            className={'font-sfPro bg-primary text-white border-transparent hover:border-primary hover:bg-transparent hover:text-foreground border-2 rounded-md px-5 py-2 transition-colors duration-500'}>
            Download CV
          </button>
        </a>


      </div>

    </nav>
  );
}

export default Navbar;
