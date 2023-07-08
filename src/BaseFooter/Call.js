import React from "react";
import img3 from "../images/icons8-call-50.png";
import './Call.css'
import Govind from "./Govind";

const Call = (props) => {
  return (
    
    <div className="m">
        <div className="wr"> 
      <div className="photo">
        <img src={props.img} className="i" height={70}></img>
      </div>
      <div className="te">
        <h1 className="cl">{props.text}</h1>
      </div>
      <div className="phn">
        <h2>{props.c}</h2>
      </div>
      </div>
      <div className="nh">
      <button className="btm">
        Call Now
      </button>
      </div>
    </div>
   
  );
};

export default Call;
