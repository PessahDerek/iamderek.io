const express = require("express");
const cors = require('cors');
require('dotenv/config');
const path = require('path')
const app = express()
const projects = require('./projectimgs/projectdetails.json')


app.use(cors());
app.listen(process.env.PORT, ()=>{
    console.log("App Online and listening");
})
var directory = path.join(__dirname, '/projectimgs')
app.use(express.static(directory))
// routes
app.get("/", async(req, res)=>{
    res.send(projects)
})
