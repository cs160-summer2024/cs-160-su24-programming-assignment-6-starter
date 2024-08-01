import express from "express";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = http.createServer(app);
const wsServer = new WebSocketServer({ server });
const PORT = 6160;

// Serve static files from the 'public' directory
app.use(express.static("public"));

let counter = 0;
let backgroundColor = "white";

// YOUR CODE HERE

// Start the server
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT}`);
});
