const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const userRoute = require("./routes/4mRoute");
require("dotenv").config();

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with url
// encoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))
mongoose.connect(process.env.DB_CONNECTION).then(() => {
  console.log("DB connected!!!");
})



app.use("/user", userRoute);





const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`server run on  port ${Port}`);
})