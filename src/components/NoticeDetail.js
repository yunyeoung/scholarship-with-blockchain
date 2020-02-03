import React, {Component} from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import img from '../images/background.png';
import { Container, Row, Col } from 'reactstrap';
import { AiOutlineRight } from "react-icons/ai";
import { Button } from 'reactstrap';

import MiddleBar from "./common/MiddleBar";

const Notice = ({ notice, loading, error, history })=>{

  const trStyle1={
      borderBottom: "1px solid #444444",
      padding: "50px",
      height: '50px',
      marginLeft: "10px"
  }
  const aStyle={
      fontSize: '12px',
      weight: '750px',
      marginLeft: '10px'
  }
  const titleStyle={
    fontSize: '20px',
    weight: '750px',
    marginLeft:'50px'
}
  const bodyStyle = {
    marginLeft:'10px'
  }
  const cardStyle = {
      marginTop: 50,
      width: '850px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom:'50px'
  }
  const liStyle = {
      fontSize: '30px',
      paddingBottom:'30px'
  }
  const Container = styled.div`
    margin-top:50px;
    margin-left: 50px;
    font-weight:700;
`

if(loading || !notice){
  return null;
}

const { userId, id, title, body } = notice;

const onClick = e =>{
  history.push('/noticelist');
}


return(
  <div>
    <MiddleBar>공지사항</MiddleBar>
    <Container style={cardStyle}>
      <Row style={trStyle1}>
        <Col xs="0.5"><AiOutlineRight /></Col>
        <Col style={liStyle}>공지사항</Col>
      </Row>
      <Row style={titleStyle}>{title}</Row>
      <Row style={aStyle}>{userId}</Row>
      <Row style={aStyle}>첨부파일: 파일제목.hwp</Row>
      <hr size="5" noshade></hr>
      <Row style={bodyStyle}>
        {body}
        <img src={img}  height='170px' width='300px'/>
        </Row>
      <hr size="5" noshade></hr>
      <Row>
        <Col sm="3" md={{ size:3, offset:10}}><Button color="link"><Link to='/noticeList'>목록으로</Link></Button></Col>
      </Row>
    </Container>
  </div>
  );

}

export default Notice;
