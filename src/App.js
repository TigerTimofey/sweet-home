import React from "react";
import logo from "./mt4u.png";
import "./App.css";
import Start from "./Start/Start";
import Main from "./Main/Main";

import { useSelector } from "react-redux";

function App() {
  const passwordCheck = useSelector((state) => state.passwordCheck);
  const showStart = useSelector((state) => state.showStart);
  const hideLogo = useSelector((state) => state.hideLogo);

  return (
    <div className="App">
      <header className="App-header">
        {!hideLogo && !passwordCheck && (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        {passwordCheck ? (
          <>
            <img src={logo} className="App-logo-special" alt="logo" />
            <br /> <br /> <br />
            <Main onChange={showStart} />
          </>
        ) : (
          <Start />
        )}
      </header>
    </div>
  );
}

export default App;
