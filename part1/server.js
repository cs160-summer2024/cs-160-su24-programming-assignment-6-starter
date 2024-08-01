import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 6160;

// YOUR CODE HERE

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
