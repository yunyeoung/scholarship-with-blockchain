import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MiddleBar from "./MiddleBar";
import "./content.css"


const SignIn = ()=>{
  return(
    <div>
    <MiddleBar>로그인</MiddleBar>
    <span className="content">
    <Form>
      <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
    </FormGroup>
    </Form>
    </span>
    </div>
  );
}

export default SignIn;
