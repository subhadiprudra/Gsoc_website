
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var showPopUp= function(data){
    
     if(data=='1'){
       
        document.getElementById("title").innerHTML="PLAYPAL";
        document.getElementById("description").innerHTML= "An Audition Management System primarily for GLUG Auditions.";
        document.getElementById("lan").innerHTML= "#Python";
        modal.style.display = "block";
    }
     if(data=='2'){
       
        document.getElementById("title").innerHTML="REVIEWBOOK";
        document.getElementById("description").innerHTML= "An Audition Management System primarily for GLUG Auditions.";
        document.getElementById("lan").innerHTML= "#Python";
        modal.style.display = "block";
    }
     if(data=='3'){
       
        document.getElementById("title").innerHTML="YT-DOWNLOADER";
        document.getElementById("description").innerHTML= "An Audition Management System primarily for GLUG Auditions.";
        document.getElementById("lan").innerHTML= "#Python";
        modal.style.display = "block";
    }
     if(data=='4'){
       
        document.getElementById("title").innerHTML="INSTAGRAM";
        document.getElementById("description").innerHTML= "An Audition Management System primarily for GLUG Auditions.";
        document.getElementById("lan").innerHTML= "#Python";
        modal.style.display = "block";
    }
    if(data=='5'){
       
        document.getElementById("title").innerHTML="ATTENDANCE TRACKER";
        document.getElementById("description").innerHTML= "An Audition Management System primarily for GLUG Auditions.";
        document.getElementById("lan").innerHTML= "#Python";
        modal.style.display = "block";
    }
     if(data=='6'){
       
        document.getElementById("title").innerHTML="METAL_UI";
        document.getElementById("description").innerHTML= "An Audition Management System primarily for GLUG Auditions.";
        document.getElementById("lan").innerHTML= "#Python";
        modal.style.display = "block";
    }



}
