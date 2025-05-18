const players = {};

function createWaveform(id, file) {
  const wavesurfer = WaveSurfer.create({
    container: `#waveform-${id}`,
    waveColor: "#ddd",
    progressColor: "#4f46e5",
    height: 80,
    responsive: true,
    barWidth: 2,
    barGap: 2,
  });

  wavesurfer.load(file);
  players[id] = wavesurfer;

  wavesurfer.on('finish', () => {
    document.getElementById(`btn-${id}`).innerText = "Play";
  });
}

function togglePlay(id) {
  const player = players[id];
  const btn = document.getElementById(`btn-${id}`);
  if (player.isPlaying()) {
    player.pause();
    btn.innerText = "Play";
  } else {
    player.play();
    btn.innerText = "Pause";
  }
}

// Initialize players
createWaveform("david", "david.mp3");
createWaveform("pete", "pete.mp3");
