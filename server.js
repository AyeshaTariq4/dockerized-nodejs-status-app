const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const APP_MESSAGE = process.env.APP_MESSAGE || "Hello from Ayesha's Dockerized Node.js App 🚀";

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Dockerized Node.js Status App</h1>
    <p>${APP_MESSAGE}</p>
    <p>Routes: /about | /status</p>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <h1>About This Project</h1>
    <p>Built by Ayesha as part of her DevOps and Docker learning journey.</p>
    <p>This app is running inside a Docker container.</p>
  `);
});

app.get("/status", (req, res) => {
  res.json({
    app: "dockerized-nodejs-status-app",
    status: "running",
    environment: "Docker Container",
    port: PORT,
    learner: "Ayesha"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on port ${PORT}`);
});
