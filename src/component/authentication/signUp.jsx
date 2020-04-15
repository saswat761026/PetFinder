import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { signup } from "./../../redux/actions/indexAction";

const SignUp = (props) => {
  const [formDetails, setFormDetails] = useState({});

  const dispatch = useDispatch();

  const dispatchSignUp = useCallback(
    (formDetails) => dispatch(signup(formDetails)),
    [dispatch]
  );

  const onChangeFormDetails = (event) => {
    const propertyName = event.target.name;
    const newFormDetails = Object.assign({}, formDetails);
    newFormDetails[propertyName] = event.target.value;
    setFormDetails(newFormDetails);
  };

  const validatePassword = (password, confirmpassword) => {
    return password === confirmpassword;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const isSameAsPassword = validatePassword(
      formDetails.password,
      formDetails.confirmpassword
    );
    isSameAsPassword && dispatchSignUp(formDetails);
  };

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="enter your first name"
              onChange={(event) => {
                onChangeFormDetails(event);
              }}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="enter your last name"
              onChange={(event) => {
                onChangeFormDetails(event);
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="dateofbirth">Date of Birth</Label>
        <Input
          type="date"
          name="dateofbirth"
          id="dateofbirth"
          placeholder="enter your date of birth"
          onChange={(event) => {
            onChangeFormDetails(event);
          }}
        />
      </FormGroup>
      <FormGroup
        tag="fieldset"
        onChange={(event) => {
          onChangeFormDetails(event);
        }}
      >
        <legend>Gender</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="gender" value="male" /> Male
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="gender" value="female" /> Female
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          onChange={(event) => {
            onChangeFormDetails(event);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="enter a password"
          onChange={(event) => {
            onChangeFormDetails(event);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Confirm Password</Label>
        <Input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="re-enter your password"
          onChange={(event) => {
            onChangeFormDetails(event);
          }}
        />
      </FormGroup>
      <Button
        onClick={(event) => {
          onSubmit(event);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignUp;
