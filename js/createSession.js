var e;
var classes = ["MATH 95  DEVELOPMENTALMATHEMATICS",
"MATH 100  FOUNDATIONS OF MATHEMATICAL REASONING",
"MATH 102  INTERMEDIATE ALGEBRA",
"MATH 105  MATHEMATICAL IDEAS",
"MATH 109  TRANSITION TO ALGEBRA FOR APPLICATIONS",
"MATH 111  FINITE MATHEMATICS",
"MATH 115  COLLEGE ALGEBRA",
"MATH 119  PRE-CALCULUS",
"MATH 204  MATHEMATICAL CONCEPTS AND STRUCTURES I",
"MATH 205  MATHEMATICAL CONCEPTS AND STRUCTURES II",
"MATH 211  CALCULUS FOR APPLICATIONS",
"MATH 215  RATIONAL NUMBERS AND PROPORTIONAL REASONING FOR MIDDLE SCHOOL MATHEMATICS TEACHERS",
"MATH 223  PEDAGOGICAL CONTENT KNOWLEDGE FOR MIDDLE SCHOOL MATHEMATICS",
"MATH 225  ALGEBRA AND NUMBER CONCEPTS FOR MIDDLE SCHOOL TEACHERS",
"MATH 231  BASIC STATISTICS",
"MATH 233  HONORS BASIC STATISTICS",
"MATH 235  STATISTICS AND PROBABILITY FOR MIDDLE SCHOOL TEACHERS",
"MATH 237  ELEMENTARY BIOSTATISTICS",
"MATH 251  ELEMENTS OF GEOMETRY",
"MATH 255  GEOMETRY FOR MIDDLE SCHOOL TEACHERS",
"MATH 256  GEOMETRIC PROOF AND DEDUCTION FOR MIDDLE SCHOOL TEACHER",
"MATH 263  DISCRETE MATHEMATICS",
"MATH 265  ELEMENTARY LINEAR ALGEBRA",
"MATH 267  INTRODUCTION TO ABSTRACT MATHEMATICS",
"MATH 273  CALCULUS I",
"MATH 274  CALCULUS II",
"MATH 275  CALCULUS III",
"MATH 280  INDEPENDENT STUDY",
"MATH 283  HONORS CALCULUS I",
"MATH 284  HONORS CALCULUS II",
"MATH 293  HONORS SEMINAR IN MATHEMATICS",
"MATH 301  HISTORY OF MATHEMATICS",
"MATH 305  CHANCE",
"MATH 310  FUNCTIONS AND MODELING FOR SECONDARY SCHOOL TEACHERS",
"MATH 312  THEORY OF INTEREST",
"MATH 314  INTRODUCTION TO CRYPTOGRAPHY",
"MATH 315  APPLIED COMBINATORICS",
"MATH 320  TEACHING ADVANCED PLACEMENT CALCULUS FOR PRESERVICE TEACHERS",
"MATH 321  TEACHING MATHEMATICS IN EARLY CHILDHOOD EDUCATION",
"MATH 323  TEACHING MATHEMATICS IN ELEMENTARY SCHOOL",
"MATH 324  SUPERVISED OBSERVATION/PARTICIPATION IN ELEMENTARY SCHOOL MATHEMATICS",
"MATH 325  MATHEMATICAL PROBLEM SOLVING FOR MIDDLE SCHOOL TEACHERS",
"MATH 330  INTRODUCTION TO STATISTICAL METHODS",
"MATH 331  PROBABILITY",
"MATH 332  MATHEMATICAL STATISTICS",
"MATH 337  APPLIED REGRESSION AND TIME SERIES PREDICTIVE MODELING",
"MATH 339  BIOSTATISTICS II",
"MATH 353  EUCLIDEAN AND NON-EUCLIDEAN GEOMETRIES",
"MATH 369  INTRODUCTION TO ABSTRACT ALGEBRA",
"MATH 374  DIFFERENTIAL EQUATIONS",
"MATH 377  MATHEMATICAL MODELS",
"MATH 378  SCIENTIFIC MODELNG AND SIMULATION",
"MATH 379  FOURIER ANALYSIS WITH APPLICATIONS",
"MATH 390  INTRODUCTION TO ACTUARIAL MATHEMATICS",
"MATH 397  INTERNSHIP IN MATHEMATICS",
"MATH 420  APPLICATIONS OF TECHNOLOGY FOR SECONDARY SCHOOL TEACHERS",
"MATH 423  TEACHING MATHEMATICS IN THE SECONDARY SCHOOLS",
"MATH 424  SCHOOL-BASED METHODS FOR MIDDLE SCHOOL MATHEMATICS TEACHING",
"MATH 425  MATHEMATICS TEACHING IN THE MIDDLE SCHOOL",
"MATH 426  INTERNSHIP IN SECONDARY EDUCATION - MATHEMATICS",
"MATH 429  READINGS IN MATHEMATICS EDUCATION FOR THE SECONDARY SCHOOL TEACHER",
"MATH 430  SEMINAR IN INTERNSHIP",
"MATH 435  NUMERICAL ANALYSIS I",
"MATH 437  OPERATIONS RESEARCH",
"MATH 438  LONG-TERM ACTUARIAL MODELS I",
"MATH 439  COMPUTATIONAL PROBABILITY MODELS",
"MATH 442  SHORT-TERM ACTUARIAL MODELS",
"MATH 448  LONG-TERM ACTUARIAL MODELS II",
"MATH 451  GRAPH THEORY",
"MATH 457  DIFFERENTIAL GEOMETRY",
"MATH 463  LINEAR ALGEBRA",
"MATH 465  NUMBER THEORY",
"MATH 467  ALGEBRAIC STRUCTURES",
"MATH 473  INTRODUCTORY REAL ANALYSIS",
"MATH 475  COMPLEX ANALYSIS",
"MATH 477  TOPOLOGY",
"MATH 480  SELECTED TOPICS IN MATHEMATICS",
"MATH 485  MATHEMATICAL FINANCE",
"MATH 486  RISK MANAGEMENT AND FINANCIAL ENGINEERING",
"MATH 490  SENIOR SEMINAR IN MATHEMATICS",
"MATH 491  READINGS IN MATHEMATICS",
"MATH 492  RESEARCH IN MATHEMATICS",
"MATH 493  READINGS IN MATH EDUCATION",
"MATH 494  INDEPENDENT STUDY: RESEARCH IN MATHEMATICS EDUCATION",
"MATH 495  APPLIED MATHEMATICS LABORATORY I",
"MATH 496  APPLIED MATHEMATICS LABORATORY II",
"MATH 498  SENIOR SEMINAR: ACTUARIAL SCIENCE AND RISK MANAGEMENT",
"MATH 499  HONORS THESIS IN MATHEMATICS",
"COSC 109  COMPUTERS AND CREATIVITY",
"COSC 111  INFORMATION AND TECHNOLOGY FOR BUSINESS",
"COSC 112  HONORS INFORMATION AND TECHNOLOGY FOR BUSINESS",
"COSC 119  UIE:INFORMATION EFFECTIVELY IN THE COMPUTING SCIENCES",
"COSC 175  GEN COMPUTER SCI",
"COSC 210  INTRODUCTION TO DIGITAL SECURITY AND DIGITAL FORENSICS",
"COSC 225  HONORS INTRODUCTION TO LEGO ROBOTICS",
"COSC 236  INTRODUCTION TO COMPUTER SCIENCE I",
"COSC 237  INTRODUCTION TO COMPUTER SCIENCE II",
"COSC 290  PRINCIPLES OF COMPUTER ORGANIZATION",
"COSC 304  FUNDAMENTALS OF COMPUTER SCIENCES",
"COSC 310  SPECIAL TOPICS: ADVANCED PROGRAMMING",
"COSC 311  DIGITAL TECH SOCI",
"COSC 314  INTRODUCTION TO CRYPTOGRAPHY",
"COSC 321  COMPUTERIZATION AND ITS IMPACTS",
"COSC 336  DATA STRUCTURES AND ALGORITHM ANALYSIS",
"COSC 350  DATA COMMUNICATIONS AND NETWORKING",
"COSC 397  INTERNSHIP IN COSC",
"COSC 412  SOFTWARE ENGINEERING",
"COSC 415  COMPILER DESIGN",
"COSC 417  INTRODUCTION TO THE THEORY OF COMPUTING",
"COSC 418  ETHICAL AND SOCIETAL CONCERNS OF COMPUTER SCIENTISTS",
"COSC 431  SELECTED TOPICS COMPUTER SCIENCE",
"COSC 432  REQUIREMENTS ANALYSIS & MODELING",
"COSC 435  MOBILE APPLICATION DEVELOPMENT",
"COSC 436  OBJECT-ORIENTED DESIGN & PROGRAMMING",
"COSC 439  OPERATING SYSTEMS",
"COSC 440  OPERATING SYSTEMS SECURITY",
"COSC 442  SOFTWARE QUALITY ASSURANCE AND TESTING",
"COSC 450  NETWORK SECURITY",
"COSC 455  PROGRAMMING LANGUAGES: DESIGN & IMPLEMENTATION",
"COSC 457  DATABASE MANAGEMENT SYSTEMS",
"COSC 458  APPLICATION SOFTWARE SECURITY",
"COSC 459  COMPUTER SIMULATION & MODELING",
"COSC 461  ARTIFICIAL INTELLIGENCE",
"COSC 465  ROBOTICS",
"COSC 471  COMPUTER GRAPHICS",
"COSC 481  CASE STUDIES IN COMPUTER SECURITY",
"COSC 483  DESIGN & ANALYSIS ALGORITHMS",
"COSC 484  WEB-BASED PROGRAM",
"COSC 485  REVERSE ENGINEERING AND MALWARE ANALYSIS",
"COSC 490  SOFTWARE PROJECT PRACTICUM",
"COSC 493  DIR ECTED READINGS IN COMPUTER SCIENCE",
"COSC 495  INDEPENDENT STUDY",
"COSC 499  HONORS THESIS IN COSC"]

$(function() {

  //creating a caleneder
  $('#calendar').fullCalendar({
    defaultView: 'month',

    header: {
      left: 'prev,next today',
      center: 'title addEventButton',
      right: 'month,agendaWeek,agendaDay'
    },

    //when an event is clicked
    eventClick: function(event, element){
      
      //bring the pop up box
      document.getElementById('event-details').style.display='block'
      document.getElementById('Event Title').innerHTML= "Class: " + event.title;
      document.getElementById('showDate').innerHTML = "Day: " + event.extendedProps.date
      document.getElementById('showStartTime').innerHTML = "Start Time: " +  event.extendedProps.startTime
      document.getElementById('showEndTime').innerHTML = "End Time: " + event.extendedProps.endTime
      document.getElementById('showPlace').innerHTML = "Place: " + event.extendedProps.place
      document.getElementById('showTaken').innerHTML = "Taken By: " + event.extendedProps.takenBy
      
      e = event
       
    },

    customButtons: {
        addEventButton: {
            text: "Add Session",
            click: function(){
                document.getElementById('create-session').style.display='block'
                document.getElementById('Box Title').innerHTML="Create Session"
                document.getElementById('create').style.visibility='visible'
                document.getElementById('update').style.visibility='hidden'
            
            }
        }
    }

  
  });
 
  //adding events (later on adding event from database)
  

  $.get("/tSession", (res, err)=>{  
      console.log(res);
      res.forEach(item=>{
        var event = {
            id: '',
            title: '',
            start: '',
            allDay: false,
            backgroundColor: '',
            extendedProps:{
                takenBy: '',
                place: '',
                endTime: '',
                startTime: '',
                date: ''
            }
          }
        event.id = item.SessionNumb
        $.get("/session/" + event.id, (res, err)=>{
            console.log(res)
            var date = new Date(res[0].Day.substr(0, 10)+"T"+res[0].Start_Time);
            event.start = date;
            event.extendedProps.place = res[0].PlaceOfTutoring;
            event.extendedProps.endTime = res[0].End_Time;
            event.extendedProps.startTime = res[0].Start_Time;
            event.extendedProps.date = res[0].Day.substr(0, 10);
        });

        $.get("/sSession/" + event.id, (res, err)=>{
            console.log(res)
            if(res.length >0){
                
                event.backgroundColor = "green"
                $.get("/account/"+res[0].StudentID, (res, err)=>{
                    console.log(res)
                    event.extendedProps.takenBy = res[0].FName + " " +res[0].LName;
                    $.get("/cSession/" + event.id, (res, err)=>{
                        console.log(res)
                        event.title = res[0].ClassIDs
                        $('#calendar').fullCalendar('renderEvent', event, true);
            
                    })
                })
                    
            }
            else{
                event.extendedProps.takenBy = "No one";
                event.backgroundColor = "#3a87ad"
                $.get("/cSession/" + event.id, (res, err)=>{
                    console.log(res)
                    event.title = res[0].ClassIDs
                    $('#calendar').fullCalendar('renderEvent', event, true);
        
                })
            }
            console.log(event.extendedProps.takenBy)

        })

     


      })
      

  });

  

});


function processForm(){

        console.log(document.forms["myForm"].method);
    if(document.getElementById('create').style.visibility == "visible")
        document.forms["myForm"].action="/create-session"
    else
        document.forms["myForm"].action="/update-session/"+e.id
    
    if(!classes.includes(document.forms["myForm"]["class"].value)){
        document.getElementById("classErr").innerHTML = "Invalid Class!!";
        return false;
    }else{
        document.getElementById("classErr").innerHTML = "";  
    }
    
    
    var sTime = document.forms["myForm"]["sTime"].value
    var eTime = document.forms["myForm"]["eTime"].value
    var today = new Date()
    today.setSeconds(0);
    var twoWeeks = new Date(today.getFullYear(), today.getMonth(), today.getDate()+14)
    var pickedDate = new Date(document.forms["myForm"]["day"].value+"T"+sTime);
    var pickedDatewEndTime = new Date(document.forms["myForm"]["day"].value+"T"+eTime);
  
    
    if(pickedDate.getTime() < today.getTime() || pickedDate.getTime() > twoWeeks.getTime()){
        console.log("aaaaaaaaaaaaaaaaaaaaaa")
        document.getElementById("dateErr").innerHTML = "Must be within two weeks from today!";
        return false;
    }else{
        document.getElementById("dateErr").innerHTML = "";
    }


    if(sTime < "08:00" || sTime > "21:00"){
        document.getElementById("sTimeErr").innerHTML = "Must be between 08:00 am - 9:00 pm";
        return false;
    }else{
        document.getElementById("sTimeErr").innerHTML = "";
    }

    //THIS IS TO CHECK IF START TIME IS ATLEAST 30 MINUTES AFTER CURRENT TIME 
    //make a date object 30 minutes from current time    
    var todayThirty =moment(today).add(30, 'm').toDate();

    if(pickedDate.getTime() < todayThirty.getTime()){
        document.getElementById("sTimeErr").innerHTML = "Must be 30 minutes after current time";
        return false;
    }else{
        document.getElementById("sTimeErr").innerHTML = "";
    }

    //THIS IS TO CHECK IS ENDTIME IS 30 MINS AFTER START TIME
    //create a new date 30 minutes after start time date
    var pickedDateThirty = moment(pickedDate).add(30, 'm').toDate();

    //see if end time is less than start time, and also if it is 30 minutes after start time
    if(eTime < sTime || pickedDatewEndTime.getTime() < pickedDateThirty.getTime()){
        document.getElementById("eTimeErr").innerHTML = "Must be 30 minutes after start time";
        return false;
    }else{
        document.getElementById("eTimeErr").innerHTML = "";
    }


    return true;

}

function editSession(){
    document.getElementById('create-session').style.display='block'
    document.getElementById('update').style.visibility='visible'
    document.getElementById('create').style.visibility='hidden'
    document.getElementById('Box Title').innerHTML="Update Session"
    document.forms["myForm"]["class"].value = e.title
    document.forms["myForm"]["day"].value = e.extendedProps.date
    document.forms["myForm"]["sTime"].value = e.extendedProps.startTime
    document.forms["myForm"]["eTime"].value = e.extendedProps.endTime
    document.forms["myForm"]["place"].value = e.extendedProps.place
    document.getElementById('event-details').style.display='none'
    
    
}

function deleteSession(){
    $.ajax({
        url: "/session/"+e.id,
        method: 'DELETE',
        success: function(result) {
            location.href = "/create-session"
        },
    });
}



 


