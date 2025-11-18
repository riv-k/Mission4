const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const authMiddleware = require("./middleware/auth");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello Nerds!");
});

app.use(authMiddleware);

// AI chat endpoint
app.use("/api/insurance", chatRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
