var express = require("express");
var app = express();
var sql = require("./js/db.js");

app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/img", express.static("./img"));


//API section
//---------------------------------------------------------------------------------------

app.get("/allAccounts", (req, res)=>{
    const qstring = "SELECT UserId,Fname,Lname,Email,IsTeacher FROM account"
    sql.query(qstring, (err, rows, fields) =>{
        res.json(rows);
    })
    

});

app.get("/allAccounts/:id", (req, res)=>{
    const qstring = "SELECT UserId,Fname,Lname,Email,IsTeacher FROM account WHERE UserId = ?"
    sql.query(qstring, [req.params.id],(err, rows, fields) =>{
        res.json(rows);
    })
    

});





//------------------------------------------------------------------------------------------------


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
