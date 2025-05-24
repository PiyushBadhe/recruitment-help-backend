import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  console.log("Root route hit");
  res.send("Hello from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
