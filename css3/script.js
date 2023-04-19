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
        var wall = document.getElementById("wall");
        var speaker = document.getElementById("speaker");
        var audio = document.getElementById("audio");
        var button2 = document.getElementById("radio-btn");
        var song_name = document.getElementById("name");
        
        var css_of_button2_bf = window.getComputedStyle(button2, '::before');
        
        var css_of_speaker_bf = window.getComputedStyle(button2, '::before', '::after');
        
        if (audio.paused) { 
            audio.play();
            button2.style.setProperty('--background', '#ffff99');
            button2.style.setProperty('--filter1', 'drop-shadow(0 0 20px #ffff99)');
            button2.style.setProperty('--animation1', 'radio-fade 3s linear infinite');
            song_name.style.setProperty('background', '#0c8d07');
            song_name.style.setProperty('filter','drop-shadow(0 0 8px #0c8d07)');
            song_name.style.setProperty('--content2', 'visible');
            speaker.style.setProperty('--animation2', 'speaker-fade 2s linear infinite');
            
        }
        else {
            audio.pause();
            button2.style.filter = 'none';
            button2.style.setProperty('--background', '#b4b447');
            button2.style.setProperty('--filter1', '');
            button2.style.setProperty('--animation1', '');
            song_name.style.setProperty('background', '#494747');
            song_name.style.setProperty('filter', '');
            song_name.style.setProperty('--content2', '');
            speaker.style.setProperty('--animation2', '');
            } 
    }