import { NavbarAvatar } from '../../../assets/images';
import { customLinkType } from '@/ts/custom-link.type';
import { Link } from 'react-scroll';
import { Resume } from '../../../assets/pdfs';
import { useTheme } from '@/hooks/use-theme';
import { MenuIcon, Moon, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useBreakpoints } from '@/hooks/use-breakpoints';
import { useMediaQuery } from '@/hooks/use-mediaQuery';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { IconBurger } from '@tabler/icons-react';
import { FaBurger } from 'react-icons/fa6';

/* eslint-disable-next-line */
export interface NavbarProps {
}

export function Navbar(props: NavbarProps) {
  const { setTheme } = useTheme();
  const isMd = useMediaQuery('(min-width: 768px)');
  const isXs = useMediaQuery('(max-width: 1023px)');
  const links: customLinkType[] = [
    {
      id: 'home',
      text: 'home'
    },
    {
      id: 'about',
      text: 'about'
    },
    {
      id: 'work',
      text: 'work'
    },
    {
      id: 'contacts',
      text: 'contacts'
    }
  ];
  return (
    isMd ? <nav className={'flex fixed justify-between bg-background items-center z-30 w-full py-4 px-[10%]'}>
        <div className={'navbar-avatar overflow-hidden relative h-10 w-10 lg:w-12 lg:h-12 bg-primary rounded-full'}>
          <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1'} />
        </div>
        <ul className={'list-none flex gap-10 text-gray-400 group'}>
          {links.map((link) => (
            <li key={link.id}>
              <Link offset={-80}
                    className={'font-sfPro relative flex lg:text-xl cursor-pointer capitalize hover:text-foreground justify-center'}
                    activeClass="active" smooth spy duration={0} to={link.id}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className={'flex items-center justify-center gap-10'}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className={'focus-visible:outline-none'}>
              <button className={'w-[1.2rem] h-[1.2rem] relative flex items-center justify-center'}>
                <Sun
                  className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon
                  className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a download={'Saidani Ghaith Resume'} href={Resume}>
            <button
              className={'font-sfPro bg-primary text-white text-sm lg:text-md border-transparent hover:border-primary hover:bg-transparent hover:text-foreground border-2 rounded-md px-3 py-1.5 lg:px-5 lg:py-2 transition-colors duration-500'}>
              Download CV
            </button>
          </a>
        </div>
      </nav> :
      <nav className={'flex fixed justify-between bg-background items-center z-30 w-full py-4 px-10 lg:px-44'}>
        <div className={'navbar-avatar overflow-hidden relative w-12 h-12 bg-primary rounded-full'}>
          <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1'} />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'link'} className={'focus:outline-none'}>
              <MenuIcon size={32} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
  );
}


/**/


export default Navbar;
