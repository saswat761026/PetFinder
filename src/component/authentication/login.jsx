import React, { useState, memo, useCallback } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { login } from "./../../redux/actions/indexAction";

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const makeUserDetails = createSelector(
    (state, props) => props,
    (state) => state.user,
    (props, user) => {
      return user;
    }
  );

  const userDetails = useSelector(
    (state) => makeUserDetails(state),
    shallowEqual
  );

  const dispatch = useDispatch();

  const dispatchLogin = useCallback(
    (email, password) => dispatch(login(email, password)),
    [dispatch]
  );

  const inputHandler = (event) => {
    const value = event.target.value;
    event.target.id === "email" ? setEmail(value) : setPassword(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatchLogin(email, password);
  };

  const redirectToSignUpPage = () =>{
    props.history.push("/signup")
  }

  return (
    <div>
      <h4>Login</h4>
      <Form>
        <FormGroup>
          <Label for="email" hidden>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(event) => {
              inputHandler(event);
            }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="password" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => {
              inputHandler(event);
            }}
          />
        </FormGroup>{" "}
        <Button
          onClick={(event) => {
            onSubmit(event);
          }}
        >
          Submit
        </Button>
      </Form>
      <Button color="link" onClick={redirectToSignUpPage}>Don't have account? Sign Up here.</Button> 
    </div>
  );
};

export default memo(Login);
