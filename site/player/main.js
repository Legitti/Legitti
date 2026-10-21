let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

let playerRoot = (typeof window.LEGITTI_PLAYER_ROOT === "string") ? window.LEGITTI_PLAYER_ROOT : "../";

// Define the tracks that have to be played
let track_list = [
  {
    name: "Broken",
    artist: "Legitti",
    image: "img/broken_orchestral.avif",
    path: "mp3/broken_orchestral.mp3"
  },
  {
    name: "Better Days",
    artist: "Legitti",
    image: "img/better_days.avif",
    path: "mp3/better_days.mp3"
  },
  {
    name: "Beautiful Scene",
    artist: "Legitti",
    image: "img/bs.avif",
    path: "mp3/beautiful_scene.mp3"
  },
  {
    name: "Higher Ends",
    artist: "Legitti",
    image: "img/higher_ends.avif",
    path: "mp3/higher_ends.mp3"
  },
  {
    name: "Trip",
    artist: "Legitti",
    image: "img/trip.avif",
    path: "mp3/trip.mp3"
  },
  {
    name: "Love",
    artist: "Legitti",
    image: "img/love.avif",
    path: "mp3/love.mp3"
  },
  {
    name: "Novocain",
    artist: "Legitti",
    image: "img/novocain.avif",
    path: "mp3/novocain.mp3"
  },
  {
    name: "Broken",
    artist: "Legitti",
    image: "img/broken.avif",
    path: "mp3/broken.mp3"
  },
  {
    name: "Broken Piano",
    artist: "Legitti",
    image: "img/broken_piano.avif",
    path: "mp3/broken_piano.mp3"
  },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = playerRoot + track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + playerRoot + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "Track " + (track_index + 1) + " of " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function stopSitePlayer() {
  if (!curr_track) return;
  curr_track.pause();
  try { curr_track.currentTime = 0; } catch (e) {}
  isPlaying = false;
  if (playpause_btn) playpause_btn.innerHTML = '<i class="fa-light fa-play-circle"></i>';
}

// Load the first track in the tracklist
if (track_art && track_name) loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa-light fa-pause-circle"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa-light fa-play-circle"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

let savedVolume = 0.99;

function setVolumeIcon(muted) {
  var icon = document.getElementById("volume-icon");
  if (icon) icon.className = muted ? "fa-light fa-volume-xmark" : "fa-light fa-volume-high";
}

function setVolume() {
  if (!volume_slider || !curr_track) return;
  var level = Number(volume_slider.value) / 100;
  curr_track.volume = level;
  curr_track.muted = level === 0;
  if (level > 0) savedVolume = level;
  setVolumeIcon(level === 0);
}

function toggleMute() {
  if (!curr_track) return;
  if (curr_track.muted || curr_track.volume === 0) {
    curr_track.muted = false;
    curr_track.volume = savedVolume || 0.99;
    if (volume_slider) volume_slider.value = Math.round(curr_track.volume * 100);
    setVolumeIcon(false);
  } else {
    savedVolume = curr_track.volume || savedVolume || 0.99;
    curr_track.muted = true;
    if (volume_slider) volume_slider.value = 0;
    setVolumeIcon(true);
  }
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}