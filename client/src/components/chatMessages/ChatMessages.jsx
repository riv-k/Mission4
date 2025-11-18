import React, { useRef, useEffect } from "react";
import styles from "./ChatMessages.module.css";

function ChatMessages({ conversation, loading }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <div className={styles.chatArea}>
      {conversation.map((msg, idx) => (
        <div
          key={idx}
          className={
            msg.role === "user" ? styles.userMessage : styles.tinaMessage
          }
        >
          {msg.message}
        </div>
      ))}
      {loading && <div className={styles.loading}>Tina is typing...</div>}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default ChatMessages;
