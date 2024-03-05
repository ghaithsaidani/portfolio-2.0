// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { Button } from '@/components/ui/button';
import { About, Work } from '@/views';
import { TracingBeam } from '@/components/ui/tracing-beam';
import Home from '@/views/home/home';
import ParticlesBg from 'particles-bg';
import React from 'react';
import Navbar from '@/views/navbar/navbar';
import Contact from './views/contact/contact';
import { Toaster } from '@/components/ui/toaster';


export function App() {
  return (



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
  );
}

export default App;
