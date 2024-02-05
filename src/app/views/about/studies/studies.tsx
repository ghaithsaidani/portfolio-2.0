import styles from './studies.module.scss';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

/* eslint-disable-next-line */
export interface StudiesProps {
}

export function Studies(props: StudiesProps) {
  return (
    <article className={'flex-1 grid place-items-center px-24'}>
      <div className={"text-center flex flex-col gap-5"}>
        <h2 className={"font-sfPro font-bold text-2xl"}>Studies</h2>
        <p className={'font-sfPro text-gray-400 text-md px-24'}>Studying is not only a way to learn new information, but also a way to develop valuable skills and habits
          that
          can benefit us in life.</p>
      </div>
      <Card >
        <CardContent>hello</CardContent>
      </Card>
    </article>
  );
}

export default Studies;
