import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExperienceType } from '@/ts/experience.type';
import { Badge } from '@/components/ui/badge';
import { Confledis, Einstein, Infogerance } from '../../../../assets/images';
import { Separator } from '@/components/ui/separator';
import { Quote } from '@/components/ui/quote';

/* eslint-disable-next-line */
export interface ExperiencesProps {
}

const Experience = (props: ExperienceType) => {
  return (
    <div className={'experience flex justify-between'}>
        <div className={'flex flex-col items-start'}>
          <h5 className={'font-inter font-bold text-xs sm:text-sm lg:text-base capitalize'}>{props.enterpriseName}</h5>
          <div className={'flex flex-col lg:flex-row gap-3 mt-3 '}>
            <h6 className={'text-[0.8rem] capitalize text-gray-400 text-nowrap'}>{props.emplacement}</h6>
            <Badge className={'w-fit'}>{props.period}</Badge>
          </div>
          <img src={props.enterpriseImg} alt={props.alt} className={'mt-6'} />
        </div>
        <div className={'text-left pl-3 pr-0 sm:pl-6 sm:pr-8 lg:px-20'}>
          <h5 className={'font-inter font-medium text-xs sm:text-sm lg:text-base capitalize'}>{props.position}</h5>
          <p className={'font-inter text-[0.6rem] sm:text-[0.7rem] lg:text-sm mt-3 text-gray-400'}>{props.description}</p>
        </div>

    </div>);
};

export function Experiences(props: ExperiencesProps) {
  const experiences: ExperienceType[] = [
    {
      enterpriseName: 'confledis SAS',
      emplacement: 'remotely, france',
      period: 'Aug 2023 - Oct 2023',
      enterpriseImg: Confledis,
      alt: 'confledis',
      position: 'intern',
      description: 'My task is to make updates by adding new features and fixing bugs in an accounting application that is already built and also to make a CI/CD with AWS.'
    },
    {
      enterpriseName: 'Infogérance',
      emplacement: 'hybrid, tunis',
      period: 'Feb 2022 - Jun 2022',
      enterpriseImg: Infogerance,
      alt: 'infogerance',
      position: 'intern',
      description: 'Web application for managing hotel maintenance and complaints, and a Mobile application for housekeepers who are responsible for observing room faults.',
      last: true
    }
  ];

  return (
    <div className={'flex h-full flex-col justify-between align-middle px-[5%] xl:pt-5 2xl:py-5 gap-5'}>
      <Card className={'text-center h-full py-[5%] px-7 sm:px-11'}>
        <CardHeader className={'mb-10 px-2'}>
          <CardTitle className={'font-sfProBold text-[2rem] lg:text-[2.5rem] mb-5'}>Experiences</CardTitle>
          <Quote authorName={'albert einstein'} authorPhoto={Einstein} header={'Hallo,'}
                 description={'Heute ist dein Tag,'}
                 quote={'The only source of knowledge is experience.'} />
        </CardHeader>
        <CardContent className={'flex flex-col justify-between h-fit gap-16 sm:gap-24 lg:gap-32'}>
          <Experience {...experiences[0]} />
          <Separator />
          <Experience {...experiences[1]} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Experiences;
