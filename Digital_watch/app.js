
function showTime(){

    var date = new Date();
    var hrs = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM"
    var datey = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
   var hrsheading = document.getElementById("hrs").innerHTML=hrs;
   var minheading = document.getElementById("min").innerHTML=min;
   var secheading = document.getElementById("sec").innerHTML=sec;
   var session = document.getElementById("session").innerHTML=session;
   var date = document.getElementById("date").innerHTML=datey;
   var month = document.getElementById("month").innerHTML=month;
   var year = document.getElementById("year").innerHTML=year;
   console.log(hrsheading,minheading,secheading,session);
  
   if(hrs > 12)
        hrs = hrs -12;
         session="PM";
   
        setInterval(showTime, 1000)
}

showTime();


