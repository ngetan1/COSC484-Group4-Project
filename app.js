var express = require("express");
var app = express();
var sql = require("./js/db.js");
var bodyParser = require('body-parser')
var session = require('express-session');
var passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var sessionStore = new MySQLStore(sql);

app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/img", express.static("./img"));
app.use(session({
    secret: "al1896yb143m5v1k145ganqmw189b123b",
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

//API section
//---------------------------------------------------------------------------------------


app.get("/allAccounts", (req, res)=>{
    const qstring = "SELECT UserId,Fname,Lname,Email,IsTeacher FROM account"
    sql.query(qstring, (err, rows, fields) =>{
        console.log(rows);
        res.json(rows);
    })
    

});

app.get("/allAccounts/:id", (req, res)=>{
    const qstring = "SELECT UserId,Fname,Lname,Email,IsTeacher FROM account WHERE UserId = ?"
    
    sql.query(qstring, [req.params.id],(err, rows, fields) =>{
        
        res.json(rows);
    }) 

});

app.get("/tSession/:id", (req, res)=>{
    const qstring = "SELECT * FROM teacher_sessions WHERE TeacherId = ?"
    sql.query(qstring, [req.params.id],(err, rows, fields) =>{
        res.json(rows);
    }) 

});

//Getting all session using student id
app.get("/studentSession/:id", (req, res)=>{
    const qstring = "SELECT * FROM student_sessions WHERE StudentId = ?"
    sql.query(qstring, [req.params.id],(err, rows, fields) =>{
        res.json(rows);
    }) 

});

//Getting all session using session id
app.get("/sSession/:id", (req, res)=>{
    const qstring = "SELECT * FROM student_sessions WHERE SessionNumber = ?"
    sql.query(qstring, [req.params.id],(err, rows, fields) =>{
        res.json(rows);
    }) 

});



app.get("/cSession/:id", (req, res)=>{
    const qstring = "SELECT * FROM class_sessions WHERE SessionNum = ?"
    sql.query(qstring, [req.params.id],(err, rows, fields) =>{
        res.json(rows);
    }) 

});



app.get("/session/:id", (req, res)=>{
    const qstring = "SELECT * FROM session WHERE SessionId = ?"
    sql.query(qstring, [req.params.id],(err, rows, fields) =>{
        res.json(rows);
    }) 

});


app.post('/create-session', urlencodedParser, (req, res) => {

    var elm=req.body;
    
    // var q = "SET @Day = ?;SET @Start_Time = ?;SET @End_Time = ?;SET @PlaceOfTutoring = ?; \
    // CALL session(@Day,@Start_Time,@End_Time,@PlaceOfTutoring);";
    var q = ["INSERT INTO session(Day,Start_Time,End_Time,PlaceOfTutoring)  VALUES (?,?,?,?) ",
    "INSERT INTO teacher_sessions(TeacherID,SessionNumb)  VALUES (?,?)  ",
    "INSERT INTO class_sessions(SessionNum,ClassIDs,ClassNames)  VALUES (?,?,?)  "]
    
    
    sql.query(q[0], [elm.day, elm.sTime+":00", elm.eTime+":00", elm.place], (err, rows, fields) => {
        
        if (!err){
            
            sql.query(q[1], [2,rows.insertId], (err, rows, fields) => {
                if (!err){
                    console.log("Inserted teacher session")
                    
                }else
                    console.log(err);
            })

            sql.query(q[2], [rows.insertId, "COSC 484", "Web-Based Program"], (err, rows, fields) => {
                if (!err){
                    console.log("Inserted class session")
                    res.redirect("/create-session")
                }else
                    console.log(err);
            })
            
        }else
            console.log(err);
    })    
});


app.post('/update-session/:id', urlencodedParser, (req, res) => {
    
    var elm=req.body;
    
    // var q = "SET @Day = ?;SET @Start_Time = ?;SET @End_Time = ?;SET @PlaceOfTutoring = ?; \
    // CALL session(@Day,@Start_Time,@End_Time,@PlaceOfTutoring);";
    var q = ["UPDATE session SET Day=?, Start_Time=?, End_Time=?, PlaceOfTutoring=?  WHERE SessionId=?;",
    "UPDATE class_sessions SET ClassIDs=?, ClassNames=?  WHERE SessionNum=?;"]
    
    
    sql.query(q[0], [elm.day, elm.sTime, elm.eTime, elm.place, req.params.id], (err, rows, fields) => {
        
        if (!err){
            
            sql.query(q[1], ["COSC 484", "Web-Based Program",  req.params.id], (err, rows, fields) => {
                if (!err){
                    console.log("Updated class session")
                    res.redirect("/create-session")
                }else
                    console.log(err);
            })
            
        }else
            console.log(err);
    })    
});


//deleting a session using session id
app.delete('/sSession/:id', (req, res) => {
    sql.query('DELETE FROM student_sessions WHERE SessionNumber = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            console.log("Deleted student session")
        else
            console.log(err);
    })

    
});

//deleting a session using student id
app.delete('/studentSession/:id', (req, res) => {
    sql.query('DELETE FROM student_sessions WHERE StudentID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            console.log("Deleted student session")
        else
            console.log(err);
    })

    
});

app.delete('/session/:id',urlencodedParser, (req, res) => {
    sql.query('DELETE FROM teacher_sessions WHERE SessionNumb = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            console.log("Deleted teacher session")
        else
            console.log(err);
    })

    sql.query('DELETE FROM class_sessions WHERE SessionNum = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            console.log('Deleted class session.');
        else
            console.log(err);
    })

    sql.query('DELETE FROM student_sessions WHERE SessionNumber = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            console.log("Deleted student session")
        else
            console.log(err);
    })


    // $.get("http://localhost:3000/sSession/" + req.params.id, (res, err)=>{
    //     if(!err){
    //         console.log(res.length);
    //         if(res.length > 0){
    //             $.delete("http://localhost:3000/sSession/" + req.params.id, (res, err)=>{
    //                 if(err){
    //                     console.log(err)
    //                 }
    //                 else{
    //                     console.log("Deleted student session")
    //                 }
    //             })
    //         }
    //     }else{
    //         console.log(err);
    //     }
    // });

    sql.query('DELETE FROM session WHERE SessionId = ?', [req.params.id], (err, rows, fields) => {
        console.log("deleting session")
        if (!err){
            console.log('Deleted session.');
            res.status(200).end();
        }
        else
            console.log(err);
    })
});




//------------------------------------------------------------------------------------------------


app.get("/", (req, res)=>{
    
    res.sendFile(__dirname+"/main.html");

});

app.get("/session", (req, res)=>{
    
    res.sendFile(__dirname+"/session.html");

});


app.get("/create-session", (req, res)=>{
    res.sendFile(__dirname+"/createSession.html");

});
app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/login.html");

});

// app.post("/login", passport.authenticate('local', { 
//     successRedirect: "/search",
//     failureRedirect: "/login"
// }));

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
        
    var sqlString = "INSERT INTO account (UserID, password, FName, LName, Email, IsTeacher) VALUES ?";
    var values = [
        [uid, pw, fname, lname, email, isteach]
    ];

    sql.query(sqlString, [values], function(err, result){
        if (err) throw err;
        console.log('account added');
    });

    sql.query('SELECT LAST_INSERT_ID() as user_id', function(error, results, fields) {
        if(error) throw error;

        const user_id = results[0]

        req.login(user_id, function(err) {
            res.redirect('/search');
        });

    });
});

app.get("/aboutUs", (req, res)=>{
    res.sendFile(__dirname+"/aboutus.html");

});
app.get("/account", (req, res)=>{
    res.sendFile(__dirname+"/accountdetails.html");

});

passport.serializeUser(function(user_id, done){
    done(null, user_id);
});

passport.deserializeUser(function(user_id, done){
    done(null, user_id);
});

app.listen(3000);
