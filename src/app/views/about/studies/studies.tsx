import styles from './studies.module.scss';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Chrono } from "react-chrono";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
  TimelineOppositeContent
} from '@mui/lab';
import { ThemeProvider } from '@mui/material';
import { Theme } from '@/mui';
import { FSB, LJB, Sesame } from '../../../../assets/images';


/* eslint-disable-next-line */
export interface StudiesProps {
}

export function Studies(props: StudiesProps) {
  return (
    <article className={'flex-1 flex flex-col justify-between align-middle px-24 py-5 gap-5'}>
      <div className={"text-center flex flex-col gap-5"}>
        <h2 className={"font-sfPro font-bold text-2xl"}>Studies</h2>
        <p className={'font-sfPro text-gray-400 text-md px-24'}>Studying is not only a way to learn new information, but also a way to develop valuable skills and habits
          that
          can benefit us in life.</p>
      </div>
      <ThemeProvider theme={Theme}>
      <Card className={'text-center h-full py-16'}>
        <CardContent>
          <Timeline position="alternate-reverse" className={"h-full"}>
            <TimelineItem>
              <TimelineOppositeContent className={'!pt-0'}>
                <img src={Sesame} alt={'sesame logo'}/>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" style={{width:20,height:20}}/>
                <TimelineConnector sx={{background:'#0DB760',height:'200px'}}/>
              </TimelineSeparator>
              <TimelineContent className={"!text-left"}>
                <h2 className={"text-2xl font-sfPro font-bold"}>
                  Sesame University
                </h2>
                <h5 className={"font-inter text-gray-500 text-md mt-3"}>
                  Engineering's degree - Software Engineering
                </h5>
                <h6 className={"font-inter text-gray-400 text-sm mt-1"}>
                  2022 - 2025
                </h6>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent className={'!pt-0 flex h-fit justify-end'}>
                <img src={FSB} alt={'FSB logo'} />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={"primary"} style={{width:20,height:20}}/>
                <TimelineConnector sx={{background:'#0DB760',height:'200px'}}/>
              </TimelineSeparator>
              <TimelineContent>
                <h2 className={'text-2xl font-sfPro font-bold'}>
                  Faculty Of Sciences Of Bizerte
                </h2>
                <h5 className={'font-inter text-gray-500 text-md mt-3'}>
                  Bachelor's degree - Software
                  Engineering
                </h5>
                <h6 className={'font-inter text-gray-400 text-sm mt-1'}>
                  2019 - 2022
                </h6>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent className={'!pt-0'}>
                <img src={LJB} alt={'LJB logo'}/>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={'primary'} style={{width:20,height:20}}/>
              </TimelineSeparator>
              <TimelineContent className={"!text-left"}>
                <h2 className={"text-2xl font-sfPro font-bold"}>
                  Hbib Thameur High School
                </h2>
                <h5 className={"font-inter text-gray-500 text-md mt-3"}>
                  baccalaureate - Mathematics
                </h5>
                <h6 className={"font-inter text-gray-400 text-sm mt-1"}>
                  2015 - 2019
                </h6>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>
      </ThemeProvider>
    </article>
  );
}

export default Studies;
