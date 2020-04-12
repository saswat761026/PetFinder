import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) =>{
return (
  <div>
    <Header isLoggedIn={props.isLoggedIn}/>
    {props.children}
    <Footer />
  </div>
);
}

export default Layout