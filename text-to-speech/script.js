const textInput = document.getElementById("text-input");
const voiceSelect = document.getElementById("voice-select");

function populateVoices() {
  const allVoices = speechSynthesis.getVoices();

  // Filter only Indian English and Hindi
  const filteredVoices = allVoices.filter(voice =>
    voice.lang === 'en-IN' || voice.lang === 'hi-IN'
  );

  voiceSelect.innerHTML = ''; // Clear old options

  filteredVoices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} - ${voice.lang === 'hi-IN' ? 'Hindi' : 'Indian English'}`;
    voiceSelect.appendChild(option);
  });
}

function speakText() {
  const text = textInput.value.trim();
  if (!text) return;

  // Cancel previous speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance();
  const allVoices = speechSynthesis.getVoices();
  const filteredVoices = allVoices.filter(voice =>
    voice.lang === 'en-IN' || voice.lang === 'hi-IN'
  );
  const selectedVoice = filteredVoices[voiceSelect.selectedIndex];

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.text = text;

  // Delay to avoid skipping first letter
  setTimeout(() => {
    speechSynthesis.speak(utterance);
  }, 100);
}

speechSynthesis.onvoiceschanged = populateVoices;
