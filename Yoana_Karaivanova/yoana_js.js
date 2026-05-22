const cards = document.querySelectorAll('.timeline-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const decade = card.querySelector('.badge').textContent;
    alert(`Вие избрахте да разгледате повече за: ${decade}`);
  });
});