import React from "react";
import '../Styles/MiddleImage.css';
import middleImage from '../images/middleimage.PNG';
 let MiddleImage=()=>{
    return(
        <div className="middleImageContainer">
          <img src={middleImage} alt=""/>
        </div>
    )
 }
  export default MiddleImage