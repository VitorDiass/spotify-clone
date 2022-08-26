import React from "react";
import InfoCard from "../InfoCard/InfoCard";

interface props {
  title?: string;
  titleLink?: string;
  data?: Array<any>;
}

const InfoGrid = ({ title, titleLink, data = [] }: props) => {
  return (
    <div className="flex flex-col">
      <div className={`text-xl mb-6 ${titleLink ? "hover:underline" : ""}`}>
        {titleLink ? <a href={titleLink}>{title}</a> : title}
      </div>
      <div className="flex flex-row gap-x-4">
        {data.map((item, index) => (
          <InfoCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default InfoGrid;
