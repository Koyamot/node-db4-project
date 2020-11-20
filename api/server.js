  
const express = require('express');
const cors = require("cors");

const server = express();

server.use(express.json())
server.use(cors());

const recipeRouter = require("../recipe/recipeRouter.js")

server.use(logger)

server.use("/api/recipes", recipeRouter)

server.get('/', (req, res) => {
  res.send(`<h2>"Woo! I'm alive!!!"</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`Method: ${req.method}, Timestamp: [${new Date().toISOString()}], Request URL: "${req.url}"`)
  next();
}

module.exports = server;