const articles = [
  {
    year: 1976,
    title: "The Gig That Changed the World",
    text: "On this night, the Sex Pistols played a legendary concert at the Lesser Free Trade Hall in Manchester, England. While only about 40 people attended, the crowd included future members of Joy Division, New Order, The Smiths, and The Fall. This single performance is widely credited with sparking the entire punk and post-punk movement in northern England, proving that sometimes the smallest crowds make the biggest history."
  },
  {
    year: 1984,
    title: "The Boss Dominates the Eighties",
    text: "Bruce Springsteen released his massive, career-defining seventh studio album, \"Born in the U.S.A.\" Fueled by synth-driven rock hooks and stadium-sized choruses, the album spawned an incredible seven top-10 singles, including \"Dancing in the Dark\" and \"Glory Days.\" It transformed Springsteen from a critically acclaimed folk-rocker into an inescapable global megastar and defined the sonic landscape of the mid-1980s."
  },
  {
    year: 2001,
    title: "Radiohead Pushes the Electronic Frontier",
    text: "Exactly eight months after releasing their experimental masterpiece \"Kid A,\" Radiohead returned with \"Amnesiac.\" Recorded during the same intense studio sessions, the album blended avant-garde jazz, ambient electronic textures, and haunting alternative rock. It debuted at number one on the UK charts and number two in the US, cementing the band's reputation as the premier sonic architects of the new millennium."
  }
];

const now = new Date();
const monthName = now.toLocaleString('en-US', { month: 'long' });
const day = now.getDate();
document.getElementById('page-title').textContent = `On This Day: ${monthName} ${day}`;

const container = document.getElementById('articles-container');

articles.forEach(article => {
  const el = document.createElement('article');
  el.className = 'article';
  el.innerHTML = `
    <span class="year-badge">${article.year}</span>
    <h2>${article.title}</h2>
    <p>${article.text}</p>
  `;
  container.appendChild(el);
});