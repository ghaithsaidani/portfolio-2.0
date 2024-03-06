// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { About, Work } from '@/views';
import { TracingBeam } from '@/components/ui/tracing-beam';
import Home from '@/views/home/home';
import ParticlesBg from 'particles-bg';
import React from 'react';
import Navbar from '@/views/navbar/navbar';
import Contact from './views/contact/contact';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/providers/theme-provider';


export function App() {
  return (

    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TracingBeam>
        <header>
          <Navbar/>
        </header>

        <main>
          <Home/>
          <About/>
          <Work/>
          <Contact/>
          <ParticlesBg type="cobweb" bg={true} color={"#0DB760"}/>
        </main>
        <Toaster/>
      </TracingBeam>
    </ThemeProvider>
  );
}

export default App;
