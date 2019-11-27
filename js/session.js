var e;

$.get("http://localhost:3000/allAccounts", (res, err)=>{
  console.log(res);
  console.log(res[0].UserId);

});
if(location.search > 1){
  var query = parseQuery(location.search);
  setTimeout(function(){
    document.getElementById("className").innerHTML= query.class + " Session";
    document.getElementById("tutorName").innerHTML= "Tutor: "+query.tutor;

  }, 1000);
  console.log(query);
}

$(function() {

  //creating a caleneder
  $('#calendar').fullCalendar({
    defaultView: 'month',

    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },

    //when an event is clicked
    eventClick: function(event, element){
      
      //bring the pop up box
      document.getElementById('modal-wrapper').style.display='block'
      document.getElementById('Box Title').innerHTML= "Class: " + event.title;
      if(event.extendedProps.taken == true){
        document.getElementById('accept').value = "Decline";
      }else{
        document.getElementById('accept').value = "Accept";
      }
      
      e = event
       
  }

  
  });
 
  //adding events (later on adding event from database)
  var date = new Date("2019-11-08" + 'T00:00:00');
  $('#calendar').fullCalendar('renderEvent', {
    title: "COSC 484",
    start: date,
    allDay: false,
    id: 5667,
    extendedProps:{
      taken: false
    }
  }, true);

  $('#calendar').fullCalendar('renderEvent', {
    title: "COSC 584",
    start: date,
    allDay: false,
    id: 6554,
    extendedProps:{
      taken: false
    }
  }, true);

});


function processForm(){
  console.log("getting called");
  console.log(e.id);
  document.getElementById('modal-wrapper').style.display='none';
  if(e.extendedProps.taken==true){
    e.extendedProps.taken = false;
    e.backgroundColor = "#3a87ad";
  }else{
    e.extendedProps.taken = true;
    e.backgroundColor="green"
  } 

  $('#calendar').fullCalendar( 'updateEvent', e);
 }

 function parseQuery(queryString) {
  var query = {};
  var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      pair[1] = pair[1].replace(/\+/g," ");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
