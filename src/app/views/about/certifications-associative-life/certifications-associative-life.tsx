import styles from './certifications-associative-life.module.scss';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AIESEC, AOC, ITS, Meta, OperahWinfrey, TechClub } from '../../../../assets/images';
import { Badge } from '@/components/ui/badge';
import { CertificationType } from '@/ts/certification.type';
import { Separator } from '@/components/ui/separator';
import { AssocationType } from '@/ts/association.type';
import { Quote } from '@/components/ui/quote';

/* eslint-disable-next-line */
export interface CertificationsAssociativeLifeProps {
}

const Certification = (props: CertificationType) => {
  return (
    <div className={'certification'}>
      <div className={'flex flex-col gap-3 md:gap-4'}>
        <div className={'flex justify-between items-center'}>
          <div className={'flex items-center gap-1 sm:gap-3'}>
            <h4
              className={'font-inter font-medium text-[0.65rem] sm:text-xs lg:text-base capitalize'}>{props.provider}</h4>
            <img src={props.img} alt={props.alt} className={'w-5 sm:w-6 lg:w-8'} />
          </div>
          <h5 className={'font-inter text-nowrap text-primary capitalize text-[0.6rem] sm:text-[0.7rem] lg:text-base'}>{props.name}</h5>
        </div>
        <div className={'flex gap-4 lg:gap-12 items-center'}>
          <h5 className={'font-inter text-[0.6rem] sm:text-[0.7rem] lg:text-[0.9rem] text-primary capitalize'}>{props.placement}</h5>
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
        <div className={'flex gap-1 sm:gap-1.5 lg:gap-4 items-center'}>
          <h5 className={'font-inter font-medium text-[0.55rem] sm:text-xs lg:text-base capitalize '}>{props.name}</h5>
          <img src={props.img} alt={props.alt} className={'w-4 sm:w-5 lg:w-7'} />
        </div>
        <div className={'flex gap-2 sm:gap-3 lg:gap-7 items-center'}>
          <h5 className={'font-inter text-primary text-[0.55rem] sm:text-xs lg:text-base capitalize'}>{props.position}</h5>
          <Badge className={'w-full'}>{props.period}</Badge>
        </div>
      </div>
      {!props.last && < Separator className="my-4" />}
    </div>
  );
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
      period: 'Oct 2022 - Jan 2023'
    },
    {
      name: 'aiesec bizerte',
      img: AIESEC,
      alt: 'aiesec',
      position: 'member',
      period: 'Feb 2022 - Feb 2023'
    },
    {
      name: 'art of code FSB',
      img: AOC,
      alt: 'aoc',
      position: 'member',
      period: 'Sep 2021 - Jun 2022',
      last: true
    }
  ];
  return (
    <article className={'flex h-full flex-col justify-between align-middle px-[5%] xl:pt-5 2xl:py-5 gap-5'}>
      <Card className={'text-center h-full py-[5%] px-7 sm:px-11'}>
        <CardHeader className={'mb-10 px-2'}>
          <CardTitle className={'font-sfProBold text-[1.7rem] sm:text-[2rem] lg:text-[2.5rem] mb-5'}>Certifications &
            Associative Life</CardTitle>
          <Quote authorName={'oprah winfrey'} authorPhoto={OperahWinfrey} header={'Hello,'}
                 description={'Today is your day,'}
                 quote={'Certifications pave the path, associative life builds the bridges. Together, they lead to success.'} />
        </CardHeader>
        <CardContent className={'flex flex-col gap-20 h-fit'}>
          <div className={'certifications text-left'}>
            <h3
              className={'w-fit capitalize text-sm sm:text-base font-sfPro font-bold text-gray-400 underline decoration-2'}>
              certifications
            </h3>
            <div className={'my-certifications mt-[3%]'}>
              {certs.map((cert) => {
                return <Certification {...cert} key={cert.name} />;
              })}
            </div>
          </div>
          <div className={'associations text-left'}>
            <h3 className={' w-fit capitalize text-sm sm:text-base font-sfPro font-bold text-gray-400 underline decoration-2'}>
              associative life
            </h3>
            <div className={'my-associations  mt-[3%]'}>
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
