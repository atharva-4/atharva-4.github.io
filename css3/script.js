function play() { 
var video = document.getElementById("vid"); 
var button = document.getElementById("btn"); 
var scr = document.getElementById("tv-scr");

if (video.paused) { 
video.play();
video.style.width = 'auto';
button.style.backgroundColor = 'green';
button.style.animation = 'none';
scr.style.boxShadow = '1px 2px 5px white';
 } 
else 
{ 
video.pause();
video.style.width = '0px';
button.style.backgroundColor = '#b80d0d';
button.style.animation = '';
scr.style.boxShadow = 'none';
} 
} 
