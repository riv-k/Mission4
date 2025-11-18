const aiService = require("../services/aiService");
const { buildInterviewPrompt } = require("../helpers/promptBuilder");

const sendMessage = async (req, res) => {
  try {
    const { conversation } = req.body;

    if (!conversation) {
      return res.status(400).json({ error: "Invalid conversation format" });
    }

    console.log("Received Conversation:", conversation);
    const prompt = buildInterviewPrompt(conversation);
    // console.log("Generated Prompt:", prompt);

    const aiResponse = await aiService.getResponse(prompt);
    // console.log("AI Response:", aiResponse);

    res.json({ reply: aiResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI service failed" });
  }
};

module.exports = { sendMessage };
