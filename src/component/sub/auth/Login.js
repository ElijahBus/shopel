import React from 'react';
import { 
  Form,
  FormGroup,
  Label,
  Input,  
  Button
 } from "reactstrap";

function Login() {
  return( 
    <Form>
      <Label>Email</Label>
      <Input></Input>
      <Label>Password</Label>
      <Input type="password"></Input>
      <Button>Login</Button>
    </Form>
  )
}


export default Login;