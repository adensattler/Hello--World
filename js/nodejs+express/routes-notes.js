
// ROUTE PATHING
// =============
// ? makes a character optional
// The following path matches both /message and /messages
"/messages?"

// () groups characters together, allowing symbols to act on the group
// The following path matches both / and /messages
"/(messages)?"

// * is a wildcard matching any number of any characters
// The following path can match /foo/barbar and even /foo-FOO/bar3sdjsdfbar
"/foo*/bar*bar"




// ROUTE PARAMETERS
// ================
// To denote a route parameter, we start a segment with a : followed by the name of the parameter 
// (which can only consist of case-sensitive alphanumeric characters, or _). 
// Whatever we name that route parameter, Express will automatically populate the 
// ***req.params*** object in any of the following middleware functions with whatever value the 
// path passed into the parameter, using the parameter name as its key.

/**
 * GET /odin/messages will have this log
 * { username: 'odin' }
 *
 * GET /theodinproject79687378/messages would instead log
 * { username: 'theodinproject79687378' }
 */
app.get("/:username/messages", (req, res) => {
    console.log(req.params);
    res.end();
});

/**
 * GET /odin/messages/79687378 will have this log
 * { username: "odin", messageId: "79687378" }
 */
app.get("/:username/messages/:messageId", (req, res) => {
    console.log(req.params);
    res.end();
});



// QUERY PARAMS
// ============
// Accessed by req.query
/**
 * GET /messages?sort=date&direction=ascending will log
 * Query: { sort: "date", direction: "ascending" }
 *
 * GET /messages?sort=date&sort=likes&direction=ascending will log
 * Query: { sort: ["date", "likes"], direction: "ascending" }
 */
app.get("/messages", (req, res) => {
    console.log("Query:", req.query);
    res.end();
});




// ROUTERS
// =======
// routes/authorRouter.js
import { Router } from "express";       // const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => {
    res.send("All authors")
});

authorRouter.get("/:authorId", (req, res) => {
    const { authorId } = req.params;
    res.send(`Author ID: ${authorId}`);
});

export default authorRouter;    // module.exports = authorRouter;


// app.js
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});







