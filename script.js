<script>
  function playSequence(voId, musicId) {
    const vo = document.getElementById(voId);
    const music = document.getElementById(musicId);

    vo.pause();
    music.pause();
    vo.currentTime = 0;
    music.currentTime = 0;

    vo.play();
    vo.onended = () => {
      music.play();
    };
  }

  function stopPlayback(voId, musicId) {
    const vo = document.getElementById(voId);
    const music = document.getElementById(musicId);

    vo.pause();
    music.pause();
    vo.currentTime = 0;
    music.currentTime = 0;
  }
</script>
