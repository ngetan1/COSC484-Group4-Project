var e;
var tutorName;
var classId
var query;


console.log(location.search);
//if(location.search.length > 1){
   //query = parseQuery(location.search);
  
 //setTimeout(function(){
  query = parseQuery(location.search);
  console.log(query)
  classId = query.class
  $.get("/account/"+ query.id, (res, err)=>{
    console.log(res)
    
      document.getElementById("className").innerHTML= query.class + " Session";
      tutorName = res[0].FName + " " + res[0].LName;
      console.log(tutorName)
      document.getElementById("tutorName").innerHTML= "Tutor: "+tutorName;
      console.log(res[0].IsTeacher)
  
    
  })

  $.get("/isTeacher", (res, err)=>{
    if(res.tutor == 1){
        document.getElementById("createSession").style.visibility="visible"
    }
  })
  

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
      document.getElementById('event-details').style.display='block'
      document.getElementById('Event Title').innerHTML= "Class: " + event.title;
      document.getElementById('showDate').innerHTML = "Day: " + event.extendedProps.date
      document.getElementById('showStartTime').innerHTML = "Start Time: " +  event.extendedProps.startTime
      document.getElementById('showEndTime').innerHTML = "End Time: " + event.extendedProps.endTime
      document.getElementById('showPlace').innerHTML = "Place: " + event.extendedProps.place
      document.getElementById('showTaken').innerHTML = "Tutor: " + event.extendedProps.tutor
      if(event.backgroundColor== "green"){
        document.getElementById('accept').value = "Decline";
      }else{
        document.getElementById('accept').value = "Accept";
      }
      
      e = event
       
  }

  
  });
 
  //adding events (later on adding event from database)

  console.log("beginning")
  $.get("/tSession/"+query.id, (res, err)=>{ 
      console.log(res);
      var cont = []
      for(var x = 0; x < res.length; x++){
          cont.push({c:true})
      }
      
      

      console.log(cont)
      res.forEach(function(item, i){
        var event = {
          id: '',
          title: '',
          start: '',
          allDay: false,
          backgroundColor: '',
          extendedProps:{
              tutor: '',
              place: '',
              endTime: '',
              startTime: '',
              date: ''
          }
        }
        
        var check = false;
        event.extendedProps.tutor = tutorName
        var sessionId = item.SessionNumb
        event.id = sessionId
        var className;
        var studentId;
        event.id = sessionId
        console.log("Doing" + sessionId)
        
        $.get("/cSession/"+sessionId, (res, err)=>{
          className = res[0].ClassIDs

          console.log(res.length)
          console.log(className + "    " + classId)
          console.log(cont[i].c)
          event.title = className
          if(className == classId){
            $.get("/sSession/" + sessionId, (res, err)=>{
              //   if( cont[i].c ){
                   console.log(res)
                   if(res.length>0){
                       studentId = res[0].StudentID
                       
                       $.get("/checkStudent/" + studentId, (res, err)=>{
                         console.log(res)
                         if(res.check==true){ //change
                           $.get("/session/" + sessionId, (res, err)=>{
                             console.log("inside session" + sessionId)
                   //          if( cont[i].c ){
                                 console.log(res)
                                 
                                 var date = new Date(res[0].Day.substr(0, 10)+"T"+res[0].Start_Time);
                                 event.start = date;
                                 event.extendedProps.place = res[0].PlaceOfTutoring;
                                 event.extendedProps.endTime = res[0].End_Time;
                                 event.extendedProps.startTime = res[0].Start_Time;
                                 event.extendedProps.date = res[0].Day.substr(0, 10);
                                 // if(check){
                                 //   event.backgroundColor="green"
                                 // }else{
                                 //  event.backgroundColor = "#3a87ad"
                                 // }
                                 $.get("/checkStudent/" + studentId, (res, err)=>{
                                   console.log(res)
                                   if(res.check){
                                     event.backgroundColor="green"
                                   }else{
                                     event.backgroundColor = "#3a87ad"
                                   }
                                   console.log(event);
                                   $('#calendar').fullCalendar('renderEvent', event, true);
                         
                                 })
                                 // console.log(event);
                                 // $('#calendar').fullCalendar('renderEvent', event, true);
                  //           }
                           });        
                   
                         }
                         // else{
                         //   cont[i].c  = false
                         // }
                       
                       })
                   }else if(res.length==0){
                     $.get("/session/" + sessionId, (res, err)=>{
                       console.log("inside session" + sessionId)
               //        if( cont[i].c ){
                           console.log(res)
                           
                           var date = new Date(res[0].Day.substr(0, 10)+"T"+res[0].Start_Time);
                           event.start = date;
                           event.extendedProps.place = res[0].PlaceOfTutoring;
                           event.extendedProps.endTime = res[0].End_Time;
                           event.extendedProps.startTime = res[0].Start_Time;
                           event.extendedProps.date = res[0].Day.substr(0, 10);
                           // if(check){
                           //   event.backgroundColor="green"
                           // }else{
                           //  event.backgroundColor = "#3a87ad"
                           // }
                           $.get("/checkStudent/" + studentId, (res, err)=>{
                             console.log(res)
                             if(res.check){
                               event.backgroundColor="green"
                             }else{
                               event.backgroundColor = "#3a87ad"
                             }
                             console.log(event);
                             $('#calendar').fullCalendar('renderEvent', event, true);
                   
                           })
                           // console.log(event);
                           // $('#calendar').fullCalendar('renderEvent', event, true);
              //         }
                     });        
             
                   }
                  
                   
              //   }
             
             
             })
          }      
        
        })
        
        // $.get("/sSession/" + sessionId, (res, err)=>{
        //  //   if( cont[i].c ){
        //       console.log(res)
        //       if(res.length>0){
        //           studentId = res[0].StudentID
                  
        //           $.get("/checkStudent/" + studentId, (res, err)=>{
        //             console.log(res)
        //             if(res.check==true){ //change
        //               $.get("/session/" + sessionId, (res, err)=>{
        //                 console.log("inside session" + sessionId)
        //       //          if( cont[i].c ){
        //                     console.log(res)
                            
        //                     var date = new Date(res[0].Day.substr(0, 10)+"T"+res[0].Start_Time);
        //                     event.start = date;
        //                     event.extendedProps.place = res[0].PlaceOfTutoring;
        //                     event.extendedProps.endTime = res[0].End_Time;
        //                     event.extendedProps.startTime = res[0].Start_Time;
        //                     event.extendedProps.date = res[0].Day.substr(0, 10);
        //                     // if(check){
        //                     //   event.backgroundColor="green"
        //                     // }else{
        //                     //  event.backgroundColor = "#3a87ad"
        //                     // }
        //                     $.get("/checkStudent/" + studentId, (res, err)=>{
        //                       console.log(res)
        //                       if(res.check){
        //                         event.backgroundColor="green"
        //                       }else{
        //                         event.backgroundColor = "#3a87ad"
        //                       }
        //                       console.log(event);
        //                       $('#calendar').fullCalendar('renderEvent', event, true);
                    
        //                     })
        //                     // console.log(event);
        //                     // $('#calendar').fullCalendar('renderEvent', event, true);
        //      //           }
        //               });        
              
        //             }
        //             // else{
        //             //   cont[i].c  = false
        //             // }
                  
        //           })
        //       }else if(res.length==0){
        //         $.get("/session/" + sessionId, (res, err)=>{
        //           console.log("inside session" + sessionId)
        //   //        if( cont[i].c ){
        //               console.log(res)
                      
        //               var date = new Date(res[0].Day.substr(0, 10)+"T"+res[0].Start_Time);
        //               event.start = date;
        //               event.extendedProps.place = res[0].PlaceOfTutoring;
        //               event.extendedProps.endTime = res[0].End_Time;
        //               event.extendedProps.startTime = res[0].Start_Time;
        //               event.extendedProps.date = res[0].Day.substr(0, 10);
        //               // if(check){
        //               //   event.backgroundColor="green"
        //               // }else{
        //               //  event.backgroundColor = "#3a87ad"
        //               // }
        //               $.get("/checkStudent/" + studentId, (res, err)=>{
        //                 console.log(res)
        //                 if(res.check){
        //                   event.backgroundColor="green"
        //                 }else{
        //                   event.backgroundColor = "#3a87ad"
        //                 }
        //                 console.log(event);
        //                 $('#calendar').fullCalendar('renderEvent', event, true);
              
        //               })
        //               // console.log(event);
        //               // $('#calendar').fullCalendar('renderEvent', event, true);
        //  //         }
        //         });        
        
        //       }
             
              
        //  //   }
        
        
        // })

        // $.get("/checkStudent/" + studentId, (res, err)=>{
        //   console.log(res)
        //   if(res.check){
        //     check = true
        //   }else{
        //     check = false
        //   }

        // })

        // $.get("/session/" + sessionId, (res, err)=>{
        //   console.log("inside session" + sessionId)
        //   if( cont[i].c ){
        //       console.log(res)
              
        //       var date = new Date(res[0].Day.substr(0, 10)+"T"+res[0].Start_Time);
        //       event.start = date;
        //       event.extendedProps.place = res[0].PlaceOfTutoring;
        //       event.extendedProps.endTime = res[0].End_Time;
        //       event.extendedProps.startTime = res[0].Start_Time;
        //       event.extendedProps.date = res[0].Day.substr(0, 10);
        //       // if(check){
        //       //   event.backgroundColor="green"
        //       // }else{
        //       //  event.backgroundColor = "#3a87ad"
        //       // }
        //       $.get("/checkStudent/" + studentId, (res, err)=>{
        //         console.log(res)
        //         if(res.check){
        //           event.backgroundColor="green"
        //         }else{
        //           event.backgroundColor = "#3a87ad"
        //         }
        //         console.log(event);
        //         $('#calendar').fullCalendar('renderEvent', event, true);
      
        //       })
        //       // console.log(event);
        //       // $('#calendar').fullCalendar('renderEvent', event, true);
        //   }
        // });        

      })

      console.log("Doooooooooonnnnnnneeeee")
      

  });


});


function processForm(){
  console.log("getting called");
  
  document.getElementById('event-details').style.display='none';
  if(e.backgroundColor=="green"){
    $.ajax({
      url: "/sSession/"+e.id,
      method: 'DELETE',
      success: function(result) {
        e.backgroundColor = "#3a87ad";
        $('#calendar').fullCalendar( 'updateEvent', e);
      },
      error: function(status){
        console.log(status)
      }
    });
    
  }else{
    $.ajax({
      url: "/sSession/"+e.id,
      method: 'PUT',
      success: function(result) {
        
        e.backgroundColor="green"
        $('#calendar').fullCalendar( 'updateEvent', e);
      },
      error: function(status){
        console.log(status)
      }
    });
    
  } 

  
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
