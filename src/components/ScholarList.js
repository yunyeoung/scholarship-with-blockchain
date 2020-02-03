import React, {Component} from "react";
import { Table } from "reactstrap";
import MiddleBar from "./common/MiddleBar";
import "./content.css"
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";


const ScholarList = (props)=>{
  const scholarships=[
    {
      name:'이런장학',
      count:10
    },{
      name:'저런장학',
      count:11
    }];
    const scholarList = scholarships.map((scholarships, index)=>(
      <tr key={index}>
      <th scope="row">{index}</th>
      <td>{scholarships.name}</td>
      <td><Link to={`/scholar/${index}`}><button>신청하기</button></Link></td>
      </tr>
    ));
  return(
    <div>
      <MiddleBar>장학금 조회/신청</MiddleBar>
      <span className="content">
      <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>신청하기</th>
          </tr>
        </thead>
        <tbody>
          {scholarList}
        </tbody>
      </Table>
      </div>
      </span>
    </div>
  );
}

export default ScholarList;
