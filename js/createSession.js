var e;

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

  $.get("/tSession/2", (res, err)=>{
      console.log(res);
      for(var x = 0; x < res.length; x++){
        event.id = res[x].SessionNumb
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
                event.extendedProps.takenBy = res[0].StudentId;
                event.backgroundColor = "green"
            }
            else{
                event.extendedProps.takenBy = "No one";
                event.backgroundColor = "#3a87ad"
            }

        })

        $.get("/cSession/" + event.id, (res, err)=>{
            console.log(res)
            event.title = res[0].ClassIDs
            $('#calendar').fullCalendar('renderEvent', event, true);

        })


      }
      

  });

  

});


function processForm(){

    
    if(document.getElementById('create').style.visibility == "visible")
        document.forms["myForm"].action="/create-session"
    else
        document.forms["myForm"].action="/update-session/"+e.id
    
    
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



 


