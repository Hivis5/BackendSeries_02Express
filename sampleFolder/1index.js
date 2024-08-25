import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Response is From an Express Get");
});
app.get("/home", (req, res) => {
  res.send("Home Page Response");
});
app.get("/about", (req, res) => {
  res.send("About Page Response");
});
app.listen(port, () => {
  console.log(`server is running at port: ${port} using express`);
});
