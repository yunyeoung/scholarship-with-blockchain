import React, {Component} from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import { Table, Button, Pagination, PaginationItem } from "reactstrap";
import MiddleBar from "./common/MiddleBar";
import "./content.css"



const NoticeList = ({ notices, tempPage, lastPage, loading, error, prevPage, nextPage, total })=>{

  if(loading || !notices){
    return null;
  }

  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);

  const noticeList = notices.slice(startIndex, endIndex).map((notice)=>(
    <tr key={notice.id}>
    <th scope="row">{notice.id}</th>
    <td><Link to={`/notice/${notice.id}`}>{notice.title}</Link></td>
    <td>2020.02.01</td>
    </tr>
  ));

  return(
    <div>
      <MiddleBar>공지사항</MiddleBar>
      <span className="content">
      <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>작성날짜</th>
          </tr>
        </thead>
        <tbody>
          {noticeList}
        </tbody>
      </Table>
      </div>
      <Button onClick={prevPage}>prevPage</Button>
      {tempPage}
      <Button onClick={nextPage}>nextPage</Button>
      </span>
    </div>
  );
}

export default NoticeList;
