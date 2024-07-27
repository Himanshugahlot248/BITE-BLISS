let foods=document.getElementById("foods");
let dishes=document.getElementById("dishes");
let tracks=document.getElementById("tracks");
let homes=document.getElementById("home");
let load=document.getElementById("mainLoader")


foods.addEventListener("click",function(){
    foods.style.color="dodgerblue";
    dishes.style.color="white";
    tracks.style.color="white";
    home.style.color="white";

})
dishes.addEventListener("click",function(){
    foods.style.color="white";
    dishes.style.color="dodgerblue";
    home.style.color="white";
    tracks.style.color="white";
})
tracks.addEventListener("click",function(){
    foods.style.color="white";
    dishes.style.color="white";
    home.style.color="white";
    tracks.style.color="dodgerblue";
})
home.addEventListener("click",function(){
    foods.style.color="white";
    dishes.style.color="white";
    home.style.color="dodgerblue";
    tracks.style.color="white";
})
let logbtn=document.getElementById("logbtn");
logbtn.addEventListener("click",function(){
    document.querySelector(".loginPage").style.display="block";
})
let logedbtn=document.getElementById("logedbtn");
logedbtn.addEventListener("click",function(){
    let email=document.getElementById("name");
    let password=document.getElementById("pass");
    if(email.value==""||password.value==""){
        alert("Please Email and Password");
    }
    else{
        alert("You Logged in");
    document.querySelector(".loginPage").style.display="none";
        
    }

})

// function loader(){
//     load.style.display='none';
// }
