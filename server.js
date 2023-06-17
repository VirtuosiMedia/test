import open from "open";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3424;

app.use(bodyParser.json());
app.use(express.static("./"));

app.listen(port, function () {
  console.log(`Server started on port: ${port}`);
  open(`http://localhost:${port}`);
});
