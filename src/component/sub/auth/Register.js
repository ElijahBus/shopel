import  React from 'react';
import { 
  Form,
  FormGroup,
  Label,
  Input,  
  Button
 } from "reactstrap";

function Register() {
  return (
    <Form>
      <Label>Name</Label>
      <Input></Input>
      <Label>Email address</Label>
      <Input type="email"></Input>
      <Input placeholder="Confirm e-mail address"></Input>
      <Label>Password</Label>
      <Input type="password"></Input>
      <Button>Sign up</Button>
    </Form>
  )
}



export default Register;