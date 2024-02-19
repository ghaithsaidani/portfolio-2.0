import styles from './certifications-associative-life.module.scss';
import { Card, CardContent } from '@/components/ui/card';
import { AIESEC, AOC, ITS, Meta, TechClub } from '../../../../assets/images';
import { Badge } from '@/components/ui/badge';
import { CertificationType } from '@/ts/certification.type';
import { Separator } from '@/components/ui/separator';
import { AssocationType } from '@/ts/association.type';

/* eslint-disable-next-line */
export interface CertificationsAssociativeLifeProps {
}

const Certification = (props: CertificationType) => {
  return (
    <div className={'certification'}>
      <div className={'grid grid-cols-5 gap-y-4 gap-x-1'}>
        <div className={'flex items-center gap-3 col-start-1 col-end-3'}>
          <h4 className={'font-inter font-medium text-sm capitalize'}>{props.provider}</h4>
          <img src={props.img} alt={props.alt} className={'w-8'} />
        </div>
        <div className={'col-start-4 col-end-6'}>
          <h5 className={'font-inter text-primary capitalize text-md'}>{props.name}</h5>
        </div>
        <div className={'flex gap-12 col-start-1 col-end-3 items-center'}>
          <h5 className={'font-inter capitalize'}>{props.placement}</h5>
          <Badge>{props.date}</Badge>
        </div>
      </div>
      {!props.last && <Separator className="my-5" />}
    </div>
  );
};

const Association = (props: AssocationType) => {
  return (
    <div className={'association'}>
      <div className={'flex justify-between items-center'}>
        <div className={'flex gap-4 items-center'}>
          <h5 className={'font-inter font-medium capitalize '}>{props.name}</h5>
          <img src={props.img} alt={props.alt}  className={'h-8'}/>
        </div>
        <div className={'flex gap-7 items-center'}>
          <h5 className={'font-inter text-primary capitalize'}>{props.position}</h5>
          <Badge>{props.period}</Badge>
        </div>
      </div>
      {!props.last && < Separator className='my-4' />}
    </div>
  )
};

export function CertificationsAssociativeLife(
  props: CertificationsAssociativeLifeProps
) {
  const certs: CertificationType[] = [
    {
      name: 'meta front-end developer',
      provider: 'meta & coursera',
      img: Meta,
      alt: 'meta',
      placement: 'student',
      date: 'Apr 2023'
    },
    {
      name: 'its java',
      provider: 'it Specialist',
      img: ITS,
      alt: 'its',
      placement: 'student',
      date: 'Jan 2023',
      last: true
    }
  ];
  const associations: AssocationType[] = [
    {
      name: 'sesame tech-club',
      img: TechClub,
      alt: 'tech-club',
      position: 'member',
      period: 'Oct 2022 - Jun 2023'
    },
    {
      name: 'aiesec bizerte',
      img: AIESEC,
      alt: 'aiesec',
      position: 'member',
      period:'Feb 2022 - Feb 2023'
    },
    {
      name: 'art of code FSB',
      img: AOC,
      alt: 'aoc',
      position: 'member',
      period:'Sep 2021 - Jun 2022',
      last: true
    }
  ];
  return (
    <article className={'flex-1 flex flex-col justify-between align-middle px-24 py-5 gap-5'}>
      <div className={'text-center flex flex-col gap-5'}>
        <h2 className={'font-sfPro font-bold text-2xl'}>Certifications & Associative life</h2>
        <p className={'font-sfPro text-gray-400 text-md px-24'}>Studying is not only a way to learn new information, but
          also a way to develop valuable skills and habits
          that
          can benefit us in life.</p>
      </div>
      <Card className={'text-center h-full py-16'}>
        <CardContent className={'flex flex-col justify-around'}>
          <div className={'certifications text-left'}>
            <h3 className={' w-fit capitalize font-sfPro font-bold text-gray-400 underline decoration-2'}>
              certifications
            </h3>
            <div className={'my-certifications mt-10'}>
              {certs.map((cert) => {
                return <Certification {...cert} key={cert.name} />;
              })}
            </div>
          </div>
          <div className={'associations text-left'}>
            <h3 className={' w-fit capitalize font-sfPro font-bold text-gray-400 underline decoration-2'}>
              associative life
            </h3>
            <div className={'my-associations  mt-10'}>
              {associations.map((assoc) => {
                return <Association {...assoc} key={assoc.name} />;
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export default CertificationsAssociativeLife;
