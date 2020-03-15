const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://croche:croche5413@cluster-syszona-ibh2w.mongodb.net/croche-test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
