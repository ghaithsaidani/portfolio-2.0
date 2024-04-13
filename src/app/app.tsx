import { About, Work } from '@/views';
import { TracingBeam } from '@/components/ui/tracing-beam';
import Home from '@/views/home/home';
import ParticlesBg from 'particles-bg';
import React from 'react';
import Navbar from '@/views/navbar/navbar';
import Contact from './views/contact/contact';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/providers/theme-provider';
import { useMediaQuery } from './hooks/use-mediaQuery';


export function App() {
  const isMd = useMediaQuery('(min-width: 768px)');
  if (isMd) {
    return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TracingBeam>
          <header>
            <Navbar />
          </header>

          <main>
            <Home />
            <About />
            <Work />
            <Contact />
            <ParticlesBg type="cobweb" bg={true} color={'#0DB760'} num={200}/>
          </main>
          <Toaster />
        </TracingBeam>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <header>
        <Navbar />
      </header>
      <main>

        <Home />
        <About />
        <Work />
        <Contact />

      </main>
      {/*<Footer />*/}
      <Toaster />
      {/*<ParticlesBg type="cobweb" bg={true} color={"#0DB760"}/>*/}
    </ThemeProvider>
  );

}

export default App;
