const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./db");
const { userRoutes } = require("./routes/auth.routes");
const { boardRoutes } = require("./routes/board.routes");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "welcome to kanban api" });
});
app.use("/api", userRoutes);
app.use("/api", boardRoutes);

app.listen(port, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.messsage);
  }
  console.log(`connected to the port ${port}`);
});
