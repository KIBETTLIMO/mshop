import React from "react"
import '../Styles/Billboard.css';
import billboard from '../images/topimage.gif';
let Billboard = ()=> {
    return (
      <div className="billboardContainer">
        <img src={billboard} alt=''/>
        </div>
    )
}
 export default Billboard