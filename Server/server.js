var express = require('express');
var app = express();

app.get("/api", (req, res)=> {
    res.json({"users": ["sujan", "thapa",]})
})

app.listen(5000, ()=>{console.log("api is working.")})