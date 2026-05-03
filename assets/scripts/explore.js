// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const inputTxt = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    // for (let i = 0; i < voices.length; i++) {
    //   const option = document.createElement('option');
    //   option.textContent = `${voices[i].name} (${voices[i].lang})`;
    //   option.setAttribute('data-name', voices[i].name);
    //   voiceSelect.appendChild(option);
    // }

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }

  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    
    

    const img = document.querySelector('img');

    utterThis.onstart = () => {
      img.src = 'assets/images/smiling-open.png';
    };

    utterThis.onend = () => {
      img.src = 'assets/images/smiling.png';
    };
    
    synth.speak(utterThis);

    inputTxt.blur();
  });
}