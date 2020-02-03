import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MiddleBar from "./common/MiddleBar";
import "./content.css"


const SignIn = ({form, onChange, onSubmit})=>{
  return(
    <div>
    <MiddleBar>로그인</MiddleBar>
    <span className="content">
    <Form onSubmit={onSubmit}>
      <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" 
      onChange={onChange} value={form.email} />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" 
      onChange={onChange} value={form.password} />
    </FormGroup>
    <Button>로그인</Button>
    </Form>
    </span>
    </div>
  );
}

export default SignIn;
