import { useState } from "react";

// Assets
import tinaLogo from "./assets/tina.svg";
import refreshLogo from "./assets/refresh.svg";
import send from "./assets/send.svg";

// Components
import ChatMessages from "./components/chatMessages/ChatMessages.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";

// Styles
import "./App.css";

function App() {
  const [conversation, setConversation] = useState([
    {
      role: "aiTinaAssistant",
      message:
        "Hello! I’m Tina. I help you choose the right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?",
    },
  ]);

  // Every time the user sends a message:
  // setConversation(prev => [...prev, { role: "user", message: input }]);

  // And when you get a response from AI:
  // setConversation(prev => [...prev, { role: "aiTinaAssistant", message: aiResponse }]);

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

        {/* Conversation Display */}
        <div className="conversation-display">
          <ChatMessages conversation={conversation} />
        </div>

        {/* User input */}
        <div className="user-input">
          <UserInput
            onSend={(input) =>
              setConversation((prev) => [
                ...prev,
                { role: "user", message: input },
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
