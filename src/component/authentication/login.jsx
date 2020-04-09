import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props)=>{
    return(<div>
    <h4>Login</h4>
    <Form>
      <FormGroup>
        <Label for="email" hidden>Email</Label>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="password" hidden>Password</Label>
        <Input type="password" name="password" id="password" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>
    </div>)
}

export default Login