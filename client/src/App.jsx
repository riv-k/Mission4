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
  const initialMessage = {
    role: "aiTinaAssistant",
    message:
      "Hello! I’m Tina. I help you choose the right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?",
  };

  const [conversation, setConversation] = useState([initialMessage]);
  const [loading, setLoading] = useState(false);

  const resetConversation = () => {
    setConversation([initialMessage]);
  };

  const handleSend = async (input) => {
    setConversation((prev) => [...prev, { role: "user", message: input }]);

    setLoading(true);

    // Simulate AI response delay - replace with actual API call
    const aiResponse = await new Promise((resolve) =>
      setTimeout(() => resolve("Tina thunked to hard..."), 1000)
    );

    setConversation((prev) => [
      ...prev,
      { role: "aiTinaAssistant", message: aiResponse },
    ]);

    setLoading(false);
  };
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
          <button
            className="refresh-button"
            onClick={resetConversation}
            aria-label="Reset conversation"
          >
            <img src={refreshLogo} alt="Refresh" className="refresh-logo" />
          </button>
        </div>

        {/* Conversation Display */}
        <div className="conversation-display">
          <ChatMessages conversation={conversation} loading={loading} />
        </div>

        {/* User input */}
        <div className="user-input">
          <UserInput onSend={handleSend} />
        </div>
      </div>
    </>
  );
}

export default App;
