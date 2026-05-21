// this could be done in html but i separated it so it can be edited easily
const albums = [
  {
    title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    artist: "David Bowie",
    year: "1972",
    cover: "../Viktoria_Seymenova/images_viki/ZiggyStardust.jpg",
  },
  {
    title: "Heroes",
    artist: "David Bowie",
    year: "1977",
    cover: "../Viktoria_Seymenova/images_viki/David_Bowie_-_Heroes.png",
  },
  {
    title: "Blackstar",
    artist: "David Bowie",
    year: "2016",
    cover: "../Viktoria_Seymenova/images_viki/david_bowie_-_blackstar.jpg",
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