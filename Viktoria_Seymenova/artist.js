
const albums = [
  {
    title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    artist: "David Bowie",
    year: "1972",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a8/Ziggy_Stardust.jpg",
  },
  {
    title: "Heroes",
    artist: "David Bowie",
    year: "1977",
    cover: "https://upload.wikimedia.org/wikipedia/en/8/8b/%22Heroes%22_David_Bowie.jpg",
  },
  {
    title: "Blackstar",
    artist: "David Bowie",
    year: "2016",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/09/David_Bowie_-_Blackstar.png",
  },
];


function renderAlbums() {
  const grid = document.getElementById("records-grid");
  if (!grid) return;

  grid.innerHTML = albums.map((album) => `
    <div class="album-card" role="article" aria-label="${album.title}">
      <div class="album-cover">
        <img src="${album.cover}" alt="${album.title} album cover" loading="lazy" />
      </div>
      <div class="album-title">${album.title}</div>
      <div class="album-meta">${album.artist} · ${album.year}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderAlbums);