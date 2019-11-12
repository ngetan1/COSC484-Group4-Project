var express = require("express");
var app = express();

app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/img", express.static("./img"));

app.get("/session", (req, res)=>{
    res.sendFile(__dirname+"/session.html");

});

app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/login.html");

});

app.get("/create_account", (req, res)=>{
    res.sendFile(__dirname + "/create_account.html");
});

app.get("/create_account_redirect", (req, res)=>{
    res.sendFile(__dirname + "/create_account_redirect.html");
});

app.listen(3000);
