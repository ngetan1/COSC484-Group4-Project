$.get("/isTeacher", (res, err)=>{
    if(res.tutor == 1){
        document.getElementById("createSession").style.visibility="visible"
    }
})