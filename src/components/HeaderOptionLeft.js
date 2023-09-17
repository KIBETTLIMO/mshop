import React from "react";
import '../Styles/HeaderOptionLeft.css';
let HeaderOptionLeft =({ Icon, title, DropIcon })=>{
    return(
        <div className="HeaderOptionLeftContainer">
            {Icon && <Icon className="headerOptionIcon" />}
      <h3 className="headerOptionTitle">{title}</h3>
      {DropIcon && (<DropIcon className="headerOptionDropIcon" />)}

        </div>
    )
}
export default HeaderOptionLeft