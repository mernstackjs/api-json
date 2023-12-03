const express = require("express");
const port = 3000;
const app = express();
const expressLayout = require("express-ejs-layouts");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(expressLayout);
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
