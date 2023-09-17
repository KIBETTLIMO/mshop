import React from 'react';
import '../Styles/ButtonSlides.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

let ButtonSlides=({ index, pic }) =>{
  const color = pic === index ? 'darkorange' : "white"
  return (
    <FiberManualRecordIcon className="buttonSlide" style={{color: `${color}`}} />
  )
}

export default ButtonSlides
