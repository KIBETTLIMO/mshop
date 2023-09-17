import React from "react";
import '../Styles/LeftTopOption.css';
let LeftTopOption=({ Icon, title })=>{
    return(
        <div className="leftTopOptionContainer">
            <img src={Icon} alt="" />
            <p>{title}</p>
        </div>
    )
}
export default LeftTopOption