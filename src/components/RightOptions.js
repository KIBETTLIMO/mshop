import React from "react";
import '../Styles/RightOptions.css';
let RightOptions =({ Icon, title, description })=>{
    return(
        <div className="rightOptionsContainer">
            <div className="rightIcon">{Icon && <Icon />}</div>
      <div className="rightIconDec">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

        </div>
    )
}
export default RightOptions