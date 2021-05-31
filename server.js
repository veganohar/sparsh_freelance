const express = require("express");
const app = express();
const PORT = 3000;

const bodyParser = require("body-parser");
const config = require("./app/config/db.config");
const db = require("./app/models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(PORT,()=>{
    console.log("Server running on http://localhost:"+PORT )
})

app.get("/",(req,res)=>{
    res.send("Application Running")
})

db.mongoose.connect(`mongodb://${config.HOST}:${config.PORT}/${config.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("Successfully Connected to DB");
}).catch((err)=>{
    console.log(err);
    process.exit();
});