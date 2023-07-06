const phrases = [
  "¿En serio tienes TDAH?",
  "Eres inteligente, pero floja",
  "Dopamina",
  "Tengo que hacerlo ahora",
  "No puedo",
  "Arte",
  "Qué aburrido",
  "¿Y si me meto a un taller nuevo?",
  "Pero si a las justas puedes con lo que estás haciendo",
  "Tengo que ordenar mi cuarto",
  "Pero iré primero por agua",
  "Mi gata necesita jugar",
  "Debo comer para tomar mis medicamentos"
];

function getRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function createPhraseElements() {
  const container = document.querySelector('.container');

  for (let i = 0; i < 100; i++) { // Ajusta el número según sea necesario
    const phraseElement = document.createElement('h1');
    phraseElement.classList.add('phrase');
    phraseElement.style.top = `${Math.random() * 100}%`;
    phraseElement.style.left = `${Math.random() * 100}%`;

    container.appendChild(phraseElement);
  }
}

function updatePhrases() {
  const phraseElements = document.querySelectorAll('.phrase');
  phraseElements.forEach((phraseElement) => {
    phraseElement.textContent = getRandomPhrase();
  });
}

createPhraseElements();
updatePhrases();

setInterval(updatePhrases, 0000); // Cambia la duración según sea necesario