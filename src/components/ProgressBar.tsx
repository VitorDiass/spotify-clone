import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";


interface props {
  sliderThumbShow? : boolean
  defaultValue? : number
  handleSlideChange : Function
}

const ProgressBar = ({sliderThumbShow = false, defaultValue = 100, handleSlideChange} : props) => {
  return (
      <Slider aria-label="slider" defaultValue={defaultValue} className="group" onChange={(e) => handleSlideChange(e)}>
        <SliderTrack className="!bg-spotify-link-subtle ">
          <SliderFilledTrack className="!bg-white group-hover:!bg-spotify-green"/>
        </SliderTrack>
        {sliderThumbShow && <SliderThumb className="focus-visible:!shadow-none"/>}
      </Slider>
    
  );
};

export default ProgressBar;
