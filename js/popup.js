
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
        document.getElementById("mentors").innerHTML= "Nikhil - nikhilkumar654231@gmail.com <br/>Gulshan - kgulshan827@gmail.com";
        modal.style.display = "block";
    }
     if(data=='1'){
       
        document.getElementById("title").innerHTML="PLAYPAL";
        document.getElementById("description").innerHTML= "An app for finding songs later to be added to a playlist where they will be playable";
        document.getElementById("lan").innerHTML= "#Html #CSS #Javascript";
        document.getElementById("mentors").innerHTML= "Rohan Rao-rohanrao.dec11@gmail.com <br/>Anurag - amiapu1@gmail.com";
        modal.style.display = "block";
    }
     if(data=='3'){
       
        document.getElementById("title").innerHTML="YT-DOWNLOADER";
        document.getElementById("description").innerHTML= "This web application allows you to download youtube videos";
        document.getElementById("lan").innerHTML= "#Python #Html #Django";
        document.getElementById("mentors").innerHTML= "Isha Agarwal - isha27255@gmail.com <br/>Yash Maroo - marooyash@yahoo.in <br/>Anwesha - jazzann24@gmail.com";
        modal.style.display = "block";
    }
     if(data=='4'){
       
        document.getElementById("title").innerHTML="INSTAGRAM";
        document.getElementById("description").innerHTML= "A social blog app for posting and commenting pics";
        document.getElementById("lan").innerHTML= "#Python #Django #Html #CSS";
        document.getElementById("mentors").innerHTML= "Nirvik - nirvik.agarwal@gmail.com <br/>Souparno - souparnopaul@gmail.com";
        modal.style.display = "block";
    }
    if(data=='5'){
       
        document.getElementById("title").innerHTML="ATTENDANCE TRACKER";
        document.getElementById("description").innerHTML= "A simple attendance tracking system developed using react,node and mongodb";
        document.getElementById("lan").innerHTML= "#Node #Javascript #React";
        document.getElementById("mentors").innerHTML= "Rajkumar-rajkumarrishav4101@gmail.com <br/>Abha - jhaabha08@gmail.com Abhinav-abhinavkrishna26chemistry@gmail.com";
        modal.style.display = "block";
    }

    if(data=='6'){
       
        document.getElementById("title").innerHTML="CODEARA";
        document.getElementById("description").innerHTML= "This app is used to compile and execute the program with login feature. It also has sample problems and user's progress record.";
        document.getElementById("lan").innerHTML= "#Python";
        document.getElementById("mentors").innerHTML= "Ramiz - r.mollah07@gmail.com <br/>Kaustuv - kaustuv942@gmail.com";
        modal.style.display = "block";
    }

     if(data=='7'){
       
        document.getElementById("title").innerHTML="METAL_UI";
        document.getElementById("description").innerHTML= "A modern, responsive CSS framework built for developers.";
        document.getElementById("lan").innerHTML= "#CSS";
        document.getElementById("mentors").innerHTML= "Yash Vardhan - yashv8696@gmail.com <br/>Shubhadip- neloy.nr2@gmail.com";
        modal.style.display = "block";
    }



}
