var btn = document.getElementById("forwardButton");
//console.log(btn);
setInterval(function(){
btn.click();
},3000);

//Handling of click event
btn.onclick=function(){ 
console.log('clicked');
}
