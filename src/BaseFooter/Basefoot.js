import React from "react";
import Contentt from "./Contentt";
import Call from "./Call";
import "./Basefoot.css";
import img1 from '../images/icons8-chat-50.png'
import img2 from '../images/icons8-call-50.png'
import img3 from '../images/chat.png'
import img4 from '../images/icons8-video-call-50.png'
import Govind from "./Govind";
import Footer from "../Footer/Footer";
import Footerc from "../Footer/Footerc";
const Basefoot = () => {
  return (
    <>
      <div>
        <Contentt></Contentt>
      </div>

    <div className="gio">
      <div className="pi">
        <div className="vide">
        <Call text="Call" c="021 324" img={img2}></Call>
        <Call text="Chat" c="021 324" img={img1}></Call>
         </div>
         <div className="m11">
        <Call text="Message" c="021 324" img={img3}></Call>
        <Call text="Video Call" c="021 324" img={img4}></Call>
          </div>
        </div>
        <div><Govind></Govind></div>

        </div>

        <div>
            <Footerc></Footerc>
        </div>
        
      

    
      
      
      
    </>
  );
};

export default Basefoot;
