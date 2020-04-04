import React from 'react';
import './App.css';
import Routes from "./routes";
import { ErrorBoundary } from "./component/index";

const App = (props)=> {

  return (
    <ErrorBoundary>
    <div className="App">
    <h1>Flight Management System</h1>
    <Routes/>
   </div>
   </ErrorBoundary>
  );
}

export default App;
