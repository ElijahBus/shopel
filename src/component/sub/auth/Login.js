import React from 'react';
import { 
  Form,
  FormGroup,
  Label,
  Input,  
  Button
 } from "reactstrap";
 import {Link} from 'react-router-dom';

function Login() {
  return( 
    <Form>
      <Label>Email</Label>
      <Input></Input>
      <Label>Password</Label>
      <Input type="password"></Input>
      <Link to="/shop">
        <Button>Login</Button>
      </Link>
    </Form>
  )
}


export default Login;