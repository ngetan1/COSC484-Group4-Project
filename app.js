var express = require("express");
var app = express();

app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/img", express.static("./img"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/main.html");

});

app.get("/session", (req, res)=>{
    res.sendFile(__dirname+"/session.html");

});

app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/login.html");

});

app.get("/search", (req, res)=>{
    res.sendFile(__dirname+"/postlogin.html");

});

app.get("/createAccount", (req, res)=>{
    res.sendFile(__dirname+"/create_account.html");

});

app.get("/aboutUs", (req, res)=>{
    res.sendFile(__dirname+"/aboutus.html");

});
app.get("/account", (req, res)=>{
    res.sendFile(__dirname+"/accountdetails.html");

});
app.listen(3000);
