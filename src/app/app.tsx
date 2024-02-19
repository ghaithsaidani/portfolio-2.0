// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { Button } from '@/components/ui/button';
import { About, Work } from '@/views';


export function App() {
  return (
    <div>
      {/*<NxWelcome title="portfolio" />*/}
      {/*<Button>Hello</Button>*/}
      <About/>
      <Work/>
    </div>
  );
}

export default App;
