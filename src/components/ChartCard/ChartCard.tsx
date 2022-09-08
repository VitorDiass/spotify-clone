import clsx from 'clsx'
import React from 'react'

interface props {
    cardTitle : string
    backgroundColor : string,
    linkTo : string
    cardImage : string
    largeCard : boolean
}

const ChartCard = ({cardTitle, linkTo, backgroundColor, cardImage, largeCard} : props) => {
  return (
    <a href={linkTo} className="z-40 overflow-hidden">
      <div
        className={clsx("flex flex-col p-4 overflow-hidden max-h-[200px] min-h-[200px] rounded-lg", largeCard ? 'min-w-[450px]' : '')}
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="text-2xl">{cardTitle}</div> 
        <div className="flex flex-1 justify-end items-end">
          <img src={cardImage} height={120} width={120} className="rotate-20 shadow-md translate-x-10 translate-y-5" />
        </div>
      </div>
    </a>
  );
}

export default ChartCard