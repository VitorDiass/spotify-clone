import React from 'react'

interface props {
    cardTitle : string
    backgroundColor : string,
    linkTo : string
    cardImage : string
}

const ChartCard = ({cardTitle, linkTo, backgroundColor, cardImage} : props) => {
  return (
    <a href={linkTo} className="z-40 overflow-hidden">
      <div
        className="flex flex-col pt-4 pl-4 min-h-[200px] min-w-[450px] rounded-lg"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="text-4xl">{cardTitle}</div> 
        <div className="flex flex-1 justify-end items-end">
          <img src={cardImage} height={120} width={120} className="rotate-25 shadow-md translate-x-3 translate-y-3" />
        </div>
      </div>
    </a>
  );
}

export default ChartCard