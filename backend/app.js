const express = require("express");
const app = express();

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

// Calculating the fibonacci value
let fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

app.get("/generate/:number", (req, res) => {
  let output = 0;
  try {
    const number = parseInt(req.params.number);
    if (number) {
      output = fib(number);
    }
  } catch (e) { 
    res.send("Error");
  }
  res.json({ output });
});

app.listen(80, () => {
  console.log("App listening on port 80!");
});
