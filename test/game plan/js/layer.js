// JavaScript Document
window.onload=function(){ 
   var linkbt=document.getElementById("linkbt"); 
   var light=document.getElementById('light'); 
   var fade=document.getElementById('fade'); 
   var closebt=document.getElementById("closebt"); 
   linkbt.onclick=function(){ 
     light.style.display='block'; 
     fade.style.display='block'; 
   } 
   closebt.onclick=function(){ 
     light.style.display='none'; 
     fade.style.display='none'; 
   } 
} 