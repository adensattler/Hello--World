import express from 'express';      // Express web server framework                 const express = require("express");
import cors from 'cors';            // Enable Cross-Origin Resource Sharing         const cors = require("cors");
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';        // This loads the .env file into process.env    require('dotenv').config();
dotenv.config();
const env_var = process.env.NODE_ENV; // env var access example

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

// Middleware Config
app
    .use(cors())                     // Enable CORS
    .use(express.static("public"))   // Serve static files from the 'public' directory


// Routes
app.get("/", (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/api", (req, res) => {
    res.json({apple: "🍎", orange: "🍊", banana: "🍌"})
})

app.get("*", function (req, res) {
    res.status(404).sendFile(path.join(__dirname, "public", '404.html'));
});


// Run on the port specified in environment variables or default to 8080
const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});

