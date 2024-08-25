import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

let myData = [];
let nextId = 1;

app.post("/post", (req, res) => {
  const { name, price } = req.body;
  const newData = { id: nextId++, name, price };
  myData.push(newData);
  res.status(201).send(newData);
});

app.get("/post", (req, res) => {
  res.status(200).send(myData);
});

app.get("/post/:id", (req, res) => {
  const singleData = myData.find((data) => data.id === parseInt(req.params.id));
  if (!singleData) {
    return res.status(404).send("No Software Found");
  }
  res.status(200).send(singleData);
});
app.put("/post/:id", (req, res) => {
  const singleData = myData.find((data) => data.id === parseInt(req.params.id));
  if (!singleData) {
    return res.status(404).send("No Software Found");
  }
  const { name, price } = req.body;
  singleData.name = name;
  singleData.price = price;
  res.status(200).send(singleData);
});
app.delete("/post/:id", (req, res) => {
  const singleData = myData.findIndex(
    (data) => data.id === parseInt(req.params.id),
  );
  if (!singleData) {
    return res.status(404).send("No Software Found");
  }
  myData.splice(singleData, 1);
  return res.status(200).send("Item Deleted");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port} using express`);
});
