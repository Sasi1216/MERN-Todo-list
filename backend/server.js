const express = require("express");
const cors = require('cors')
const router = require("./routes/routes");
require("./module/db");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/tasks", router);
app.listen("7000", (err) => {
  if (err) console.log(err);
  console.log("server is stated at port number : 7000");
});
