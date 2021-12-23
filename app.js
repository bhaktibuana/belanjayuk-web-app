const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hi, welcome to Belanjayuk :)");
});

app.listen(port, () => {
  console.log(`Belanjayuk app listening at http://localhost:${port}`);
});
