import { useState } from "react";
import sendLogo from "../../assets/send.svg";
import styles from "./UserInput.module.css";

function UserInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type your response here..."
        className={styles["input-box"]}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} 
      />
      <button className={styles["send-button"]} onClick={handleSend}>
        <img src={sendLogo} alt="Send" />
      </button>
    </>
  );
}

export default UserInput;
