// Television JS //

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

    function playsong(){
        var audio = document.getElementById("aud");
        var speaker = document.getElementById("speake");
        var radio = document.getElementById("radi");
        var button2 = document.getElementById("btn2");
        var song_name = document.getElementById("name");

        if (audio.paused) { 
            audio.play();
            button2.style.filter = 'filter: drop-shadow(0 0 20px #ffff99)';
             } 
        else 
            { 
            audio.pause();
            button2.style.filter = 'none';
            } 
    }
