import React, {Component} from "react";
import { Table } from "reactstrap";
import MiddleBar from "./MiddleBar";
import "./content.css"


const ScholarList = (props)=>{
  const students=[
    {
      name:'aa',
      age:10
    },{
      name:'ee',
      age:11
    }];
    const studentList = students.map((student, index)=>(
      <tr key={index}>
      <th scope="row">{index}</th>
      <td>{student.name}</td>
      <td>{student.age}</td>
      </tr>
    ));
  return(
    <div>
      <MiddleBar>장학금 목록</MiddleBar>
      <span className="content">
      <table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>
          {studentList}
        </tbody>
      </table>
      </span>
    </div>
  );
}

export default ScholarList;
