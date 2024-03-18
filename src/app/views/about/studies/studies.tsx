import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { FSB, LJB, Sesame, VictorHugo } from '../../../../assets/images';
import { Quote } from '@/components/ui/quote';


/* eslint-disable-next-line */
export interface StudiesProps {
}

export function Studies(props: StudiesProps) {
  return (
    <div className={'flex h-full flex-col justify-between align-middle px-[5%] xl:pt-5 2xl:py-5 gap-5'}>
      <ThemeProvider theme={Theme}>
        <Card className={'text-center h-full py-[5%] flex flex-col'}>
          <CardHeader className={"mb-10"}>
            <CardTitle className={'font-sfProBold text-[2rem] lg:text-[2.5rem] mb-5'}>Studies</CardTitle>
            <Quote authorName={'victor hugo'} authorPhoto={VictorHugo} header={'Bonjour,'} description={"Aujourd'hui est votre jour,"}
                   quote={'Nothing can replace the value of reading, culture, learning, and knowledge.'}/>
          </CardHeader>
          <CardContent className={'mt-5'}>
            <Timeline position="alternate-reverse" className={'h-full justify-center !px-0'}>
              <TimelineItem>
                <TimelineOppositeContent className={'!pt-0 !pr-0'}>
                  <img src={Sesame} alt={'sesame logo'} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" style={{ width: 20, height: 20 }} />
                  <TimelineConnector sx={{ background: '#0DB760', height: '200px' }} />
                </TimelineSeparator>
                <TimelineContent className={'!text-left !pl-0'}>
                  <h2 className={'text-sm xl:text-lg 2xl:text-2xl font-sfProBold'}>
                    Sesame University
                  </h2>
                  <h5 className={'font-inter text-gray-500 text-[0.65rem] lg:text-sm 2xl:text-md mt-3'}>
                    Engineering's degree - Software Engineering
                  </h5>
                  <h6 className={'font-inter text-gray-400 text-[0.65rem] lg:text-sm mt-1'}>
                    2022 - 2025
                  </h6>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent className={'!pt-0 flex h-fit justify-end !pl-0'}>
                  <img src={FSB} alt={'FSB logo'} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={'primary'} style={{ width: 20, height: 20 }} />
                  <TimelineConnector sx={{ background: '#0DB760', height: '200px' }} />
                </TimelineSeparator>
                <TimelineContent className={'!pr-0'}>
                  <h2 className={'text-sm lg:text-lg 2xl:text-2xl font-sfProBold'}>
                    Faculty Of Sciences Of Bizerte
                  </h2>
                  <h5 className={'font-inter text-gray-500 text-[0.65rem] lg:text-sm 2xl:text-md text-md mt-3'}>
                    Bachelor's degree - Software
                    Engineering
                  </h5>
                  <h6 className={'font-inter text-gray-400 text-[0.65rem] lg:text-sm mt-1'}>
                    2019 - 2022
                  </h6>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent className={'!pt-0 !pr-0'}>
                  <img src={LJB} alt={'LJB logo'} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={'primary'} style={{ width: 20, height: 20 }} />
                </TimelineSeparator>
                <TimelineContent className={'!text-left !pl-0'}>
                  <h2 className={'text-sm lg:text-lg 2xl:text-2xl font-sfPro font-bold'}>
                    Hbib Thameur High School
                  </h2>
                  <h5 className={'font-inter text-gray-500 mt-3 text-[0.65rem] lg:text-sm 2xl:text-md'}>
                    baccalaureate - Mathematics
                  </h5>
                  <h6 className={'font-inter text-gray-400 text-[0.65rem] lg:text-sm mt-1'}>
                    2015 - 2019
                  </h6>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default Studies;
