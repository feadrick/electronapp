const $=require("jquery");
var firebase=require("firebase/app");
require("firebase/auth");
require("firebase/database");
var config = {
    apiKey: "AIzaSyApbBZoNiMFb4Bx17dg6w7QuYDTlICClr4",
    authDomain: "uitmapp.firebaseapp.com",
    databaseURL: "https://uitmapp.firebaseio.com",
    projectId: "uitmapp",
    storageBucket: "uitmapp.appspot.com",
    messagingSenderId: "1061005032627"
  };
firebase.initializeApp(config);
const db=firebase.database().ref().child("shoppinglist");
var list=document.getElementById("userlist");

    
db.on('value',(snap)=>{
    list.innerHTML="";
    snap.forEach((snapsh)=>{
         var el=document.createElement("tr");
    var cllone=document.createElement("td");
    cllone.innerText=snapsh.child("name").val();
    var clltwo=document.createElement("td");
    clltwo.innerText=snapsh.child("price").val();
    el.appendChild(cllone);
    el.appendChild(clltwo);
    list.appendChild(el);
        
    })
});
$("#insertItem").on("click",()=>{
db.push().set({
    name:$("#item_name").val(),
    price:$("#item_price").val()
});
})
function closeWin(){
    alert("close window");
}

$(".btnhide").on("click",function(){
    $(".mycontent").fadeOut();
})

$(".btnshow").on("click",function(){
    $(".mycontent").fadeIn();
})