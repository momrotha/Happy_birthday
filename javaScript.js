document.getElementById("play-button").addEventListener("click", function() {
    var audio = document.getElementById("birthday-audio");
    audio.play().catch(function(error) {
        console.log("Error playing audio: ", error);
    });
});

document.getElementById("stop-button").addEventListener("click", function() {
    var audio = document.getElementById("birthday-audio");
    audio.pause();
    audio.currentTime = 0; // Reset audio to the beginning
});
