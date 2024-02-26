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


export function App() {

  return (

    <div>
      {/*<NxWelcome title="portfolio" />*/}
      {/*<Button>Hello</Button>*/}

      <TracingBeam className={'z-50'}>
        <header>
          <Navbar/>
        </header>

        <main>
          <Home/>
          <About/>
          <Work/>
          <ParticlesBg type="cobweb" bg={true} color={"#0DB760"}/>
        </main>
      </TracingBeam>
    </div>
  );
}

export default App;
