import React, { Component } from "react";
import MiddleBar from "./common/MiddleBar";
import "./content.css"
import {Button} from 'reactstrap';
import background from '../images/background.png';

const Main = ()=>{
  return(
    <div className="img">
    <div className="content">
      <h1>아이러브유~~~</h1>
      <h2>개츠비~~~</h2>
      <div className="row"></div>
      <Button className="RegisterMainButton" size="lg">장학금 등록</Button>&nbsp;&nbsp;&nbsp;
      <Button className="RegisterMainButton" size="lg" color="warning">등록한 장학금 확인</Button>&nbsp;&nbsp;&nbsp;
      <Button className="RegisterMainButton" size="lg" color="info">사이트 이용안내</Button>&nbsp;&nbsp;&nbsp;
      <Button className="RegisterMainButton" size="lg" color="success">학생용 페이지 이동</Button>
 
    </div>
   
    </div>
  );
}

export default Main;


 /**/