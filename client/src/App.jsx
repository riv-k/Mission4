import { useState } from "react";
import tinaLogo from "./assets/tina.svg";
import refreshLogo from "./assets/refresh.svg";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <div className="header">
          <img src={tinaLogo} alt="Tina Logo" className="logo" />

          <div className="header-text">
            <div className="title">
              Tina - Your AI Insurance Policy Assistant
            </div>
            <div className="status">
              <span className="dot"></span> Online Now
            </div>
          </div>
          <img src={refreshLogo} alt="Refresh" className="refresh-logo" />
        </div>

        <div>
          {/* this div is for the chats, will be scrollable, auto scrolls to latest message */}
        </div>

        <div>
          {/* user input div, where user user can input message and hit sent / enter */}
        </div>
      </div>
    </>
  );
}

export default App;
