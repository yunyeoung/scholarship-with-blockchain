import React, { Component } from "react";
import MiddleBar from "./MiddleBar";
import "./content.css"

const Main = ()=>{
  return(
    <div>
    <MiddleBar>this is main</MiddleBar>
    <span className="content">
    this is main
    </span>
    </div>
  );
}

export default Main;
