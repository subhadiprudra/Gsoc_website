
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
    
     if(data=='2'){
       
        document.getElementById("title").innerHTML="REVIEWBOOK";
        document.getElementById("description").innerHTML= "A social media app for movies, games and tv series reviews.The app allows you to review movies, games and tv shows. It allows you to follow users and your feed shows the latest reviews by users.It has a login feature";
        document.getElementById("lan").innerHTML= "#Python #Html #CSS";
        modal.style.display = "block";
    }
     if(data=='1'){
       
        document.getElementById("title").innerHTML="PLAYPAL";
        document.getElementById("description").innerHTML= "An app for finding songs later to be added to a playlist where they will be playable";
        document.getElementById("lan").innerHTML= "#Html #CSS #Javascript";
        modal.style.display = "block";
    }
     if(data=='3'){
       
        document.getElementById("title").innerHTML="YT-DOWNLOADER";
        document.getElementById("description").innerHTML= "This web application allows you to download youtube videos";
        document.getElementById("lan").innerHTML= "#Python #Html #Django";
        modal.style.display = "block";
    }
     if(data=='4'){
       
        document.getElementById("title").innerHTML="INSTAGRAM";
        document.getElementById("description").innerHTML= "A social blog app for posting and commenting pics";
        document.getElementById("lan").innerHTML= "#Python #Django #Html #CSS";
        modal.style.display = "block";
    }
    if(data=='5'){
       
        document.getElementById("title").innerHTML="ATTENDANCE TRACKER";
        document.getElementById("description").innerHTML= "A simple attendance tracking system developed using react,node and mongodb";
        document.getElementById("lan").innerHTML= "#Node #Javascript #React";
        modal.style.display = "block";
    }
     if(data=='6'){
       
        document.getElementById("title").innerHTML="METAL_UI";
        document.getElementById("description").innerHTML= "A modern, responsive CSS framework built for developers.";
        document.getElementById("lan").innerHTML= "#CSS";
        modal.style.display = "block";
    }



}
