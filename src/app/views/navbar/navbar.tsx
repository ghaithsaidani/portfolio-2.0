import { NavbarAvatar } from '../../../assets/images';
import { customLinkType } from '@/ts/custom-link.type';
import { Link } from 'react-scroll';
import { Resume } from '../../../assets/pdfs';
import { useTheme } from '@/hooks/use-theme';
import { Info, Contact, Briefcase, FileDown, PanelLeftClose, Home, PanelLeft, PanelLeftOpen, Menu } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-mediaQuery';
import {
  Sheet, SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { IconBriefcase } from '@tabler/icons-react';
import * as React from 'react';
import { Switch, SwitchList, SwitchTrigger } from '@/components/ui/theme-switch';

import { BsPatchQuestion } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Tooltip } from '@/components/ui/tooltip';

/* eslint-disable-next-line */
export interface NavbarProps {
}

export function Navbar(props: NavbarProps) {
  const { setTheme } = useTheme();
  const theme=localStorage.getItem('vite-ui-theme') || 'light'
  const isMd = useMediaQuery('(min-width: 768px)');
  const links: customLinkType[] = [
    {
      id: 'home',
      icon: <Home />,
      text: 'home'
    },
    {
      id: 'about',
      icon: <Info />,
      text: 'about'
    },
    {
      id: 'work',
      icon: <Briefcase />,
      text: 'work'
    },
    {
      id: 'contacts',
      icon: <Contact />,
      text: 'contacts'
    }
  ];
  if (isMd) {
    return (
      <nav className={'flex fixed justify-between bg-background items-center z-30 w-full py-4 px-[10%]'}>
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
          <Switch defaultValue={theme}>
            <SwitchList className="grid w-full grid-cols-2 h-8 xl:h-10">
              <SwitchTrigger value={'light'} className={'h-6 w-6 xl:h-8 xl:w-8 p-1.5 xl:p-2'}  onClick={()=>setTheme('light')}>
                <MdLightMode className={"text-3xl"}/>
              </SwitchTrigger>
              <SwitchTrigger value={'dark'} className={'h-6 w-6 xl:h-8 xl:w-8 p-1.5 xl:p-2'} onClick={()=>setTheme('dark')}>
                <MdDarkMode className={"text-3xl"}/>
              </SwitchTrigger>
            </SwitchList>
          </Switch>
          <a download={'Saidani Ghaith Resume'} href={Resume}>
            <button
              className={'font-sfPro bg-primary text-white text-sm lg:text-md border-transparent hover:border-primary hover:bg-transparent hover:text-foreground border-2 rounded-md px-3 py-1.5 lg:px-5 lg:py-2 transition-colors duration-500'}>
              Download CV
            </button>
          </a>
        </div>
      </nav>
    );
  }
  return (
    <nav className={'flex flex-row-reverse fixed justify-between bg-background items-center z-30 w-full py-4 px-10 lg:px-44'}>
      <div className={'navbar-avatar overflow-hidden relative w-11 h-11 bg-primary rounded-full'}>
        <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1'} />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant={"ghost"} className="md:hidden text-primary bg-transparent hover:bg-transparent">
            <Menu className="h-7 w-7" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side={'left'} className={'flex flex-col justify-between'}>
          {/*<SheetClose>
            <Button size="icon" variant="default" className="sm:hidden rounded-full size-[41px] text-background bg-foreground">
              <PanelLeftClose className="h-4 w-4" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetClose>*/}
          <div>
            <SheetHeader>
              {/*<div className={'navbar-avatar overflow-hidden relative w-12 h-12 bg-primary rounded-full'}>
                <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1 object-fill'} />
              </div>*/}
              <div className={'flex items-center gap-3'}>
                <div className={'navbar-avatar overflow-hidden relative w-12 h-12 bg-primary rounded-full'}>
                  <img src={NavbarAvatar} alt={'avatar'} className={'absolute -bottom-1 object-fill'} />
                </div>
                <div className={'text-start'}>
                  <h4 className={'text-sm font-sfProBold '}>Ghaith Saidani</h4>
                  <p className={'text-xs font-sfPro text-gray-400'}>ghaith.saidani@sesame.com.tn</p>
                </div>
              </div>
            </SheetHeader>
            <ul className={'list-none flex flex-col items-center gap-5 text-gray-400 group mt-20'}>
              {links.map((link) => (
                <li key={link.id} className={'w-full'}>
                  <Link offset={-76}
                        className={'font-sfPro relative flex py-2 pl-4 items-center gap-5 text-xl cursor-pointer capitalize hover:text-foreground'}
                        activeClass="active" smooth spy duration={0} to={link.id}>
                    {link.icon}{link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <SheetFooter
            className={'!flex-col font-inter w-full gap-5 border-t-[2px] text-xs pt-5 border-t-muted'}>
              <span className={'flex items-center gap-2 font-sfPro text-base'}><BsPatchQuestion />Colour Scheme</span>
              <Switch defaultValue={theme}>
                <SwitchList className="grid w-full grid-cols-2">
                  <SwitchTrigger value={'light'} className={'flex gap-3 font-sfPro text-base'}
                                 onClick={() => setTheme('light')}>
                    <MdLightMode className={'text-xl'} />
                    <span>Light</span>
                  </SwitchTrigger>
                  <SwitchTrigger value={'dark'} className={'flex gap-3 font-sfPro text-base'}
                                 onClick={() => setTheme('dark')}>
                    <MdDarkMode className={'text-xl'} /><span>Dark</span>
                  </SwitchTrigger>
                </SwitchList>
              </Switch>
          </SheetFooter>
        </SheetContent>

      </Sheet>
      {/*<Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant={'link'} className={'focus:outline-none'}>
            <MenuIcon size={32} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerClose>
            <Cross2Icon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DrawerClose>
          <ul className={'list-none flex items-center gap-20 lg:gap-10 text-gray-400 group mt-20'}>
            {links.map((link) => (
              <li key={link.id}>
                <Link offset={-80}
                      className={'font-sfPro relative flex py-2 pl-4 items-center gap-5 text-3xl md:text-base lg:text-xl cursor-pointer capitalize hover:text-foreground'}
                      activeClass="active" smooth spy duration={0} to={link.id}>
                  {link.icon}{link.text}
                </Link>
              </li>
            ))}
          </ul>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you're done.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>*/}
    </nav>
  );
}


/**/


export default Navbar;
