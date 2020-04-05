import React from 'react';
import './style/App.scss';
import Routes from "./routes";
import { ErrorBoundary, Layout } from "./component/index";

const App = (props)=> {

  return (
    <ErrorBoundary>
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    </ErrorBoundary>
  );
}

export default App;
