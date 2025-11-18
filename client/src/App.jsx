import { useState } from "react";
import axios from "axios";

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
  const apiUri = import.meta.env.VITE_API_URI;
  const apiKey = import.meta.env.VITE_API_KEY;

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
    // Build updated conversation
    const updatedConversation = [
      ...conversation,
      { role: "user", message: input },
    ];

    // Update state
    setConversation(updatedConversation);

    setLoading(true);

    // Simulate AI response delay - replace with actual API call
    const body = { conversation: updatedConversation };
    const headers = {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    };

    const aiResponse = await axios.post(
      `${apiUri}/api/insurance/chat/`,
      body,
      headers
    );
    console.log(aiResponse.data.reply);

    setConversation((prev) => [
      ...prev,
      { role: "aiTinaAssistant", message: aiResponse.data.reply },
    ]);

    setLoading(false);
  };

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
