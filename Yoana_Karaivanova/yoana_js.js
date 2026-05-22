const decades = [
  {
    decade: "1950s",
    title: "The Big Bang of Youth Culture",
    text: "The 1950s marked a seismic shift in the musical landscape as the world moved from the sophisticated swing of the Big Band era into the raw, electric energy of Rock & Roll. Driven by the newfound independence of the \"teenager,\" artists like Elvis Presley, Chuck Berry, and Little Richard fused rhythm and blues with country music to create a sound that felt dangerous and exciting. While the youth were dancing to \"Johnny B. Goode,\" the jazz world was undergoing its own revolution; Miles Davis released the legendary Kind of Blue in 1959, an album that redefined cool and remains the best-selling jazz record of all time."
  },
  {
    decade: "1960s",
    title: "Revolution and Psychedelia",
    text: "If the 50s provided the spark, the 1960s were the wildfire. This decade saw the British Invasion, led by The Beatles and The Rolling Stones, which permanently changed the structure of pop music. As the decade progressed, the music became a mirror for social and political upheaval. Motown brought soulful perfection to the charts with stars like Aretha Franklin, while the counter-culture movement birthed Psychedelic Rock and folk-protest anthems from Bob Dylan. The decade reached its experimental peak with The Beatles' Sgt. Pepper's Lonely Hearts Club Band, an album that proved music could be high art."
  },
  {
    decade: "1970s",
    title: "The Era of Sonic Diversity",
    text: "The 1970s were characterized by a massive fragmentation of styles, offering something for everyone. It was the age of the \"Guitar God\" with Hard Rock titans like Led Zeppelin, but it was also the era of the disco ball. Disco dominated the late 70s airwaves via The Bee Gees, while Funk and Soul reached new heights of sophistication through Stevie Wonder. Simultaneously, the \"Prog Rock\" of Pink Floyd, specifically their masterpiece The Dark Side of the Moon, pushed technical boundaries. By the end of the decade, the raw, DIY spirit of Punk Rock arrived to remind the world that anyone could start a band."
  },
  {
    decade: "1980s",
    title: "The Neon Digital Explosion",
    text: "The 1980s proved that music was no longer just something you heard; it was something you watched. The launch of MTV made visual image as important as the sound, propelling \"King of Pop\" Michael Jackson and \"Queen of Pop\" Madonna to unprecedented global fame. This was the decade of the synthesizer, with New Wave and Synth-Pop defining the charts, while Hair Metal brought big choruses to stadiums. Michael Jackson's Thriller became a cultural phenomenon, but beneath the pop surface, a new genre called Hip Hop was beginning its slow climb to becoming the most influential culture on the planet."
  },
  {
    decade: "1990s",
    title: "Grunge, Grit, and the Golden Age",
    text: "The 1990s arrived as a gritty, flannel-clad reality check to the polished 80s. Grunge exploded out of Seattle, led by Nirvana and their culture-shifting album Nevermind, making \"alternative\" the new mainstream. Meanwhile, the \"Golden Age\" of Hip Hop saw a lyrical explosion with the rivalry between Tupac Shakur and The Notorious B.I.G., while the UK saw the rise of Britpop through bands like Oasis. The decade closed with a blend of genres, including the Neo-Soul revolution led by Lauryn Hill, whose album The Miseducation of Lauryn Hill bridged the gap between R&B and Hip Hop perfectly."
  },
  {
    decade: "2000s",
    title: "The Digital Identity Crisis",
    text: "The turn of the millennium was defined by how we accessed music as much as the music itself. The iPod and the rise of the internet broke down traditional genre walls. Pop-Punk and Emo became the voice of the youth, while Indie Rock saw a massive revival through bands like Radiohead and The Strokes. Beyoncé transitioned from a group member to a global icon, and Eminem became the biggest selling artist of the era. Electronic music began to merge with pop, pioneered by Daft Punk on their influential album Discovery, setting the stage for the dance-heavy decade to follow."
  },
  {
    decade: "2010s",
    title: "The Reign of the Algorithm",
    text: "In the 2010s, streaming services like Spotify turned the music industry upside down, favoring \"vibes\" and playlists over traditional albums. Hip Hop officially became the world's most popular genre, with Drake and Kendrick Lamar dominating the conversation. EDM (Electronic Dance Music) turned festivals into the new cathedrals of sound, while K-Pop broke through global borders to become a massive cultural export. Landmark albums like Adele's 21 proved that soulful balladry still had a place in a high-speed digital world, even as Trap beats became the standard for modern pop."
  },
  {
    decade: "2020s",
    title: "The Viral and the Nostalgic",
    text: "Entering the 2020s, the concept of a \"genre\" has mostly become a suggestion. Heavily influenced by TikTok, songs now go viral in seconds, leading to the rise of Hyperpop, Drill, and Bedroom Pop. There is a strong sense of \"Revivalism,\" with artists like Dua Lipa and The Weeknd looking back to 80s disco and synth-pop for inspiration. Gen Z icons like Billie Eilish and Olivia Rodrigo have brought a raw, diary-like emotionality back to the charts. Albums like SZA's SOS show a modern mastery of blending R&B, Rock, and Rap into one seamless, streamable experience."
  }
];

const timeline = document.getElementById('timeline');

decades.forEach((item, index) => {
  const el = document.createElement('div');
  el.className = 'decade-item';
  el.innerHTML = `
    <div class="decade-card bg-${index}">
      <span class="decade-badge">${item.decade}</span>
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    </div>
  `;
  timeline.appendChild(el);
});