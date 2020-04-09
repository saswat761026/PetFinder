import React from 'react';
import './style/App.scss';
import Routes from "./routes";
import { ErrorBoundary, Layout } from "./component/index";

const App = (props)=> {

  return (
    <ErrorBoundary>
      <div className="App">
      <div className="container">
        <Layout>
        <div className="mainContainer">
          <Routes/>
        </div>  
        </Layout>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
