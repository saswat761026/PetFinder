import React from "react";
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Flight Management System</NavbarBrand>
      </Navbar>  
    </div>
  );
};

export default Header;
