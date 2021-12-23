const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const app = express();
const port = 3000;

// ejs configuration
app.set("view engine", "html");
app.engine("html", ejs.renderFile);
app.use(expressLayouts);
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.render('pages/landingPage', {
    layout: "./layouts/index",
    title: "Belanjayuk",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Belanjayuk app listening at http://localhost:${port}`);
});
