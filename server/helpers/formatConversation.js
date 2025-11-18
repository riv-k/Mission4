const formatConversation = (conversationHistory) => {
  return conversationHistory
    .map(
      (item) => `${item.role === "aiTinaAssistant" ? "AI" : "User"}: ${item.message}`
    )
    .join("\n");
};

module.exports = formatConversation;