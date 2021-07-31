require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

// test
app.get("/", (req, res) => {
  res.json({ success: true });
});

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
