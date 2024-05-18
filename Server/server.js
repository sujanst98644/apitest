require("dotenv").config()
const express = require('express');
const app = express();

app.get("/", (req, res)=> {
    res.json({"users": ["sujan", "thapa",]})
})

app.get("/signup",(req, res)=>{
    res.send("hello world")
})

app.listen(process.env.PORT, ()=>{console.log("api is working.")})