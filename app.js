var express = require("express");
var app = express();

app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"))

app.get("/session", (req, res)=>{
    res.sendFile(__dirname+"/calendar.html");

});

app.listen(3000);