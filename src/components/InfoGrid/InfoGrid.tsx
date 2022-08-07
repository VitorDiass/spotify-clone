import React from 'react'
import InfoCard from '../InfoCard/InfoCard'

interface props {
    title? : string
    data? : Array<any>
}

const InfoGrid = ({title, data = []} : props) => {
  return (
    <div className="">
      <div className="text-xl mb-6">{title}</div>
      {data.map((item, index) => (
        <InfoCard data={item}/>
      ))}
    </div>
  )
}

export default InfoGrid