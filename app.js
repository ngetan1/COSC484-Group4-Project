var express = require("express");
var app = express();
var mysql= require("mysql");

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

app.get("/createAccountRedirect", (req, res)=>{
    res.sendFile(__dirname+"/postlogin.html");
    
    var parsedURL = url.parse(req.url, true);
    var fname= req.query.fname;
    var lname = req.query.lname;
    var uid = req.query.uid;
    var email = req.query.email;
    var pw = req.query.pw;
    var isteach = req.query.isteach;
    if(isteach == "Yes"){
        isteach = 1;
    }
    else{
        isteach = 0;
    }

    var con = mysql.createConnection({
        host: "...",
        user: "...",
        password: "...",
        database: "mydb"
    });

    con.connect(function(err){
        if (err) throw err;
        console.log("Connected");
        
        var sql = "INSERT INTO account (UserID, password, FName, LName, Email, IsTeacher) VALUES ?";
        var values = [
            [uid, pw, fname, lname, email, isteach]
        ];

        con.query(sql, [values], function(err, result){
            if (err) throw err;
            console.log('account added');
        });
    });
});

app.get("/aboutUs", (req, res)=>{
    res.sendFile(__dirname+"/aboutus.html");

});
app.get("/account", (req, res)=>{
    res.sendFile(__dirname+"/accountdetails.html");

});
app.listen(3000);
