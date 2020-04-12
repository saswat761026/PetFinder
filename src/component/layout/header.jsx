import React, { useCallback } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import "./../../style/header.scss";
import { ATTEMPT_USER_LOGOUT } from "./../../shared/actionType";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();

  const dispatchLogout = useCallback(
    () => dispatch({ type: ATTEMPT_USER_LOGOUT }),
    [dispatch]
  );

  const onLogoutClick = () => {
    dispatchLogout();
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Flight Management System</NavbarBrand>
        <div className="col-sm 4">
          {props.isLoggedIn && (
            <Button className="logout" color="danger" onClick={onLogoutClick}>
              Logout
            </Button>
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
