import React, { useState } from "react";
import "./style/App.scss";
import Routes from "./routes";
import { ErrorBoundary, Layout } from "./component/index";
import { auth } from "./firebase/firebaseConfig";

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  auth.onAuthStateChanged(function (user) {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <ErrorBoundary>
      <div className="App">
        <div className="container">
          <Layout isLoggedIn={isLoggedIn}>
            <div className="mainContainer">
              <Routes isLoggedIn={isLoggedIn} />
            </div>
          </Layout>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
