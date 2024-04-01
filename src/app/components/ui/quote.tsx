import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

interface QuoteProps{
  authorName:string;
  authorPhoto:string;
  quote:string;
  header?:string;
  description?:string;
}

export const Quote=(props:QuoteProps)=>{
  return (
    <div className={'mt-20 relative w-full lg:w-[65%] py-[5%] sm:px-[8%] place-self-center rounded-2xl flex flex-col gap-5'}>
      <FaQuoteLeft className={"absolute -left-[4%] sm:left-[1%] top-0 text-foreground text-[0.7rem] sm:text-[0.9rem]"} />
      <div className={'flex items-center gap-3 text-foreground'}>
        <div className={'bg-foreground flex py-1.5 px-2 sm:py-2 sm:px-3 w-fit rounded-full'}>
          <div
            className={'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-background text-foreground rounded-full grid place-items-center lg:text-[1.5rem] font-dreamingOutLoud'}>
            Q
          </div>
          <img className={'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-cover rounded-full border-[3px] border-background -ml-3 z-20'} src={props.authorPhoto}
               alt={props.authorName} />
        </div>
        <div className={'text-left'}>
          <h2 className={'text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] font-nesiaSans'}>{props.header}</h2>
          <h5 className={'text-muted-foreground text-[0.9rem] sm:text-base lg:text-[1.2rem] font-dreamingOutLoud'}>{props.description}</h5>
        </div>
      </div>
      <p className={'text-left text-[0.8rem] sm:text-[0.9rem] lg:text-[1rem] font-nesiaSans'}>{props.quote}</p>
      <h6 className={'text-muted-foreground text-left lg:text-[1.2rem] font-dreamingOutLoud capitalize'}>{props.authorName}</h6>
      <FaQuoteRight className={"absolute right-0 bottom-3 text-foreground text-[0.7rem] sm:text-[0.9rem]"} />
    </div>
  )
}