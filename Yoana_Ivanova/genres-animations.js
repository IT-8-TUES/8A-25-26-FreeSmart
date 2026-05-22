function initGenreAnimations() {
  const fadeItems = document.querySelectorAll(
    '.hero-container-genre, .artist-card, .album-card, .content-section'
  );

  fadeItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(24px)';
    item.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
  });

  fadeItems.forEach(item => observer.observe(item));
}

window.addEventListener('DOMContentLoaded', initGenreAnimations);
