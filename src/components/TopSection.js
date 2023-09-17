import React from "react";
import '../Styles/TopSection.css';
import LeftTop from './LeftTop';
import MiddleTop from './MiddleTop';
import RightTop from './RightTop';
 let TopSection =()=>{
    return(
        <div className="topSectionContainer">
       <LeftTop />
       <MiddleTop />
       <RightTop />
        </div>
    )
 }
 export default TopSection