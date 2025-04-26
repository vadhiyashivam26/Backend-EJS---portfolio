const express = require("express"); // require express.js package
const app = express();
const path = require("path"); // require path package

let port = 8080; 

app.use(express.static(path.join(__dirname, "public/css"))); // create static path for css files.
app.use(express.static(path.join(__dirname, "public/js")));  // create static path for Javascript files.

app.set("view engine", "ejs"); // used for ejs files.
app.set("views", path.join(__dirname, "/views")); // det default path for views folder.

app.listen(port, () => {
    console.log("Server is working...");
});

// home route.
app.get("/home", (req, res) => {
    res.send("you are at home page , pls type any name.");
});

// home route with name, both are different.
app.get("/home/:name", (req, res) => {
    let { name } = req.params;

    res.render("name.ejs", { name });
});

// education route for education information.
app.get("/edu/:name", (req, res) => {
    let { name } = req.params;

    res.render("edu.ejs", { name });
});

// project route for projects 
app.get("/projects/:name", (req, res) => {
    let { name } = req.params;

    res.render("projects.ejs", { name });
});

// skills route for skills
app.get("/skills/:name", (req, res) => {
    let { name } = req.params;

    res.render("skills.ejs", { name });
});