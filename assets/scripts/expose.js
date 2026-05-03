// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const el = document.getElementById('horn-select');
  el.addEventListener('change', (event) => {
    const audio = document.querySelector('audio');
    const img = document.querySelector('img');  
    if (event.target.value === 'air-horn') {
      audio.src = 'assets/audio/air-horn.mp3';
      img.src = 'assets/images/air-horn.svg';
    } else if (event.target.value === 'car-horn') {
      audio.src = 'assets/audio/car-horn.mp3';
      img.src = 'assets/images/car-horn.svg';
    } else if (event.target.value === 'party-horn') {
      audio.src = 'assets/audio/party-horn.mp3';
      img.src = 'assets/images/party-horn.svg';
    } else {
      audio.src = '';
      img.src = 'assets/images/no-image.png';
    }  });

  const slider = document.getElementById('volume');
  slider.addEventListener('input', (event) => {
    const audio = document.querySelector('audio');
    const img = document.getElementById('volume-controls').querySelector('img');
    audio.volume = event.target.value / 100;
    if (event.target.value == 0) {
      img.src = 'assets/icons/volume-level-0.svg';
    } else if (event.target.value < 33) {
      img.src = 'assets/icons/volume-level-1.svg';
    } else if (event.target.value < 67) {
      img.src = 'assets/icons/volume-level-2.svg';
    } else {
      img.src = 'assets/icons/volume-level-3.svg';
    } 
  });

  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    audio.play();
    if (audio.src.includes('party-horn')) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  }); 

}
