import React from "react";
import '../Styles/QuickLinks.css';
import JumiaMall from '../images/JumiaMall.png';
import JumiaGlobal from '../images/JumiaGlobal.png';
import JumiaOne from '../images/JumiaOne_2.png';
import JumiaPrime from '../images/JumiaPrime_2.png';
let QuickLinks =()=>{
    const links = (Icon, text) => (
        <div className="quickLinksOptions">
          <img src={Icon}  alt=''/>
          <h2>{text}</h2>
        </div>
      )
    return(
        <div className="quickLinksContainer">
      {links(JumiaMall, 'Official Stores')}
      {links(JumiaGlobal, 'Jumia Global')}
      {links(JumiaPrime, 'Free Delivery')}
      {links(JumiaOne, 'Credo Cashbacks')}
        </div>
    )
}
export default QuickLinks