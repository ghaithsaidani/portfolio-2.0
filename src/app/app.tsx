// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { Button } from '@/components/ui/button';
import { About, Work } from '@/views';
import { TracingBeam } from '@/components/ui/tracing-beam';


export function App() {
  return (

    <div>
      {/*<NxWelcome title="portfolio" />*/}
      {/*<Button>Hello</Button>*/}

      <TracingBeam>
        <About/>
        <Work/>
      </TracingBeam>
    </div>
  );
}

export default App;
