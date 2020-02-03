import React, {Component} from "react";
import { Table } from "reactstrap";
import MiddleBar from "./common/MiddleBar";
import "./content.css"
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";


const ApplyList = ({ applies, tempPage, lastPage, loading, error, nextPage, prevPage, total })=>{

  if(loading || !applies){
    return null;
  }

  console.log(applies[1].completed);

  const applyList = applies.map((applies, index)=>(
    <tr key={index}>
    <th scope="row">{index}</th>
    <td>{applies.title}</td>
    <td>{(applies.completed)? "완료":"산정중"}</td>
    <td><Link to={`/myapplys/${applies.id}`}><button>자세히보기</button></Link></td>
    </tr>
  ));
  return(
    <div>
      <MiddleBar>신청현황조회</MiddleBar>
      <span className="content">
      <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>현황</th>
            <th>자세히보기</th>
          </tr>
        </thead>
        <tbody>
          {applyList}
        </tbody>
      </Table>
      </div>
      </span>
    </div>
  );
}

export default ApplyList;
