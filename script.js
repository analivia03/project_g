const contentDiv = document.querySelector('.content');
const searchInput = document.querySelector('input[type="search"]');
const tagButtons = document.querySelectorAll('.tags-container button');
const nonsenseBtn = document.querySelector('.special-nonsense');

// Função para renderizar as músicas
function renderSongs(songsToRender) {
  contentDiv.innerHTML = '';
  
  if (songsToRender.length === 0) {
    contentDiv.innerHTML = '<p class="no-results">Nenhuma música encontrada para esse sentimento no momento.</p>';
    return;
  }

  songsToRender.forEach(song => {
    const card = document.createElement('a');
    card.href = song.link;
    card.target = '_blank';
    card.className = 'song-card';
    
    card.innerHTML = `
      <img src="${song.cover}" alt="${song.album}">
      <div class="song-info">
        <span class="song-title">${song.title}</span>
        <span class="song-album">${song.album}</span>
      </div>
    `;
    
    contentDiv.appendChild(card);
  });
}

// Filtro por Pesquisa
searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = songs.filter(song => 
    song.title.toLowerCase().includes(term) || 
    song.album.toLowerCase().includes(term)
  );
  renderSongs(filtered);
});

// Filtro por Tags
tagButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle active class
    tagButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const tag = btn.getAttribute('data-tag');
    const filtered = songs.filter(song => song.tags.includes(tag));
    renderSongs(filtered);
  });
});


// Inicializar com todas as músicas (ou vazio se preferir)
renderSongs(songs);
