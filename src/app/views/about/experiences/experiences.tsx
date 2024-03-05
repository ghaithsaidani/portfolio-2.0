import styles from './experiences.module.scss';
import { Card, CardContent } from '@/components/ui/card';
import { ExperienceType } from '@/ts/experience.type';
import { Badge } from '@/components/ui/badge';
import { Confledis, Infogerance } from '../../../../assets/images';
import { Separator } from '@/components/ui/separator';

/* eslint-disable-next-line */
export interface ExperiencesProps {
}

const Experience = (props: ExperienceType) => {
  return (
    <div className={'experience flex flex-col justify-between'}>
      <div className={"grid text-left grid-cols-7"}>
        <div className={"col-start-1 col-end-4"}>
          <h5 className={"font-inter font-medium capitalize"}>{props.enterpriseName}</h5>
          <div className={"flex gap-3 mt-3 items-center"}>
            <h6 className={'text-[0.65rem] capitalize text-gray-400'}>{props.emplacement}</h6>
            <Badge className={"w-fit xl:px-3 2xl:px-5 text-[0.6rem]"}>{props.period}</Badge>
          </div>
          <img src={props.enterpriseImg} alt={props.alt} className={'mt-6'}/>
        </div>
        <div className={"text-left col-start-4 col-end-8 px-5"}>
          <h5 className={"font-inter font-medium capitalize"}>{props.position}</h5>
          <p className={"font-inter text-sm mt-3 text-gray-400"}>{props.description}</p>
        </div>
      </div>
      {/*{!props.last && <Separator />}*/}
    </div>);
};

export function Experiences(props: ExperiencesProps) {
  const experiences: ExperienceType[] = [
    {
      enterpriseName: 'confledis SAS',
      emplacement: 'remotely, france',
      period: 'Aug 2023 - Oct 2023',
      enterpriseImg:Confledis,
      alt:'confledis',
      position:'intern',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
    },
    {
      enterpriseName: 'Infogérance',
      emplacement: 'hybrid, tunis',
      period: 'Feb 2022 - Jun 2022',
      enterpriseImg:Infogerance,
      alt:'infogerance',
      position:'intern',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      last:true
    }
  ]

  return (
    <div className={'flex h-full flex-col justify-between align-middle px-[5%] xl:pt-5 2xl:py-5 gap-5'}>
      <div className={'text-center flex flex-col gap-5'}>
        <h2 className={'font-sfPro font-bold text-2xl'}>Experiences</h2>
        <p className={'font-sfPro text-gray-400 xl:text-sm 2xl:text-md xl:px-11 2xl:px-24'}>Studying is not only a way to learn new information, but
          also a way to develop valuable skills and habits
          that
          can benefit us in life.</p>
      </div>
      <Card className={'text-center h-full py-[10%]'}>
        <CardContent className={"flex flex-col justify-between"}>

            {experiences.map((experience,index) => (
              <Experience key={index} {...experience} />

            ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Experiences;
