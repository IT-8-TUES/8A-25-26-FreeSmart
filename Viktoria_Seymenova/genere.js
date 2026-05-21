// this could be done in html but i separated it so it can be edited easily
const artists = [
  {
    name: "Kavinsky",
    description: "French producer, Drive anthem",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
  },
  {
    name: "Perturbator",
    description: "Dark synth-wave pioneer",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
  },
  {
    name: "Gunship",
    description: "Cinematic neon soundscapes",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
  },
  {
    name: "Carpenter Brut",
    description: "Heavy metal meets synthwave",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
  },
];


function renderArtists() {
  const grid = document.getElementById("artists-grid");
  if (!grid) return;

  grid.innerHTML = artists.map((artist) => `
    <div class="artist-card">
      <div class="artist-image">
        <img src="${artist.image}" alt="${artist.name}" loading="lazy" />
      </div>
      <div class="artist-name">${artist.name}</div>
      <div class="artist-meta">${artist.description}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderArtists);