let Button = document.getElementById('Button');
let message =document.getElementById("msg");
let link =document.getElementById("link");
let form =document.getElementById('form');

const ghostnumber = Math.floor(Math.random()*100) +1;
let attempt =6;

Button.onclick = function(){
 let input = document.getElementById('input');

 if(input.value != "" ){
   

 if(ghostnumber > input.value){
    message.innerHTML="le nombre est superieur a " + input.value +"";
    message.style.color = "orange"
 }else if(ghostnumber < input.value){
    message.innerHTML="le nombre est inferieur a " + input.value + ""; 
 }
 
  if(attempt == 0){
    message.innerHTML="Oops vous avez perdu , il faudrait choisir le nombre " +ghostnumber + "!";
    message.style.color="red";
    form.style.display ="none";
    link.style.display="flex";
  }

  if(input.value == ghostnumber){
    message.innerHTML="Bravoooooo ! vous avez gagnez ."
    message.style.color="green"
    form.style.display="none"
    link.style.display="flex"  
}
attempt--;

 }else {
    message.innerHTML="le champ est vide !"
    message.style.color="red"
 }

}
