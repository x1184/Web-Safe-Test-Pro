// JavaScript Document
window.onload=function(){ 
   var linkbt_1=document.getElementById("linkbt_1"); 
   var light_1=document.getElementById('light_1'); 
   var fade_1=document.getElementById('fade_1'); 
   var closebt_1=document.getElementById("closebt_1"); 
   linkbt_1.onclick=function(){ 
     light_1.style.display='block'; 
     fade_1.style.display='block'; 
   } 
   closebt_1.onclick=function(){ 
     light_1.style.display='none'; 
     fade_1.style.display='none'; 
   } 
} 