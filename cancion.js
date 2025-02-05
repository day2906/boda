let isPlaying = false;
        let audio = document.getElementById("audio");

        function toggleAudio() {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.currentTime = 41.5; // ⏩ Empieza en el segundo 30 (ajusta este valor)
                audio.play();
            }
            isPlaying = !isPlaying;
        }