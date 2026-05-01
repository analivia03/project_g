// Seleção de elementos
const contentDiv = document.querySelector('.content');
const searchInput = document.querySelector('input[type="search"]');
const tagButtons = document.querySelectorAll('.tags-container button');
const nonsenseBtn = document.querySelector('.special-nonsense');

// Função para renderizar as músicas
function renderSongs(songsToRender) {
  if (!contentDiv) return;
  
  contentDiv.innerHTML = '';
  
  if (!songsToRender || songsToRender.length === 0) {
    contentDiv.innerHTML = '<p class="no-results">Nenhuma música encontrada para esse sentimento no momento.</p>';
    return;
  }

  songsToRender.forEach(song => {
    const card = document.createElement('a');
    card.href = song.link;
    card.target = '_blank';
    card.className = 'song-card';
    
    card.innerHTML = `
      <img src="${song.cover}" alt="${song.album} Cover" onerror="this.src='https://via.placeholder.com/300?text=Capa+Indisponivel'">
      <div class="song-info">
        <span class="song-title">${song.title}</span>
        <span class="song-album">${song.album}</span>
      </div>
    `;
    
    contentDiv.appendChild(card);
  });
}

// Filtro por Pesquisa
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = songs.filter(song => 
      song.title.toLowerCase().includes(term) || 
      song.album.toLowerCase().includes(term)
    );
    renderSongs(filtered);
  });
}

// Filtro por Tags
tagButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Se for o botão especial, não aplica lógica de tag comum
    if (btn.classList.contains('special-nonsense')) return;

    tagButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const tag = btn.getAttribute('data-tag');
    const filtered = songs.filter(song => song.tags && song.tags.includes(tag));
    renderSongs(filtered);
  });
});

// Botão Nonsense (Sabrina Carpenter)
if (nonsenseBtn) {
  nonsenseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://open.spotify.com/intl-pt/track/6dgUya35uo964z7GZXM07g?si=5ca7a4834bb746a2', '_blank');
  });
}

// Inicializar com todas as músicas assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  if (typeof songs !== 'undefined') {
    renderSongs(songs);
  } else {
    console.error("O arquivo songs.js não foi carregado corretamente.");
  }
});

// Chamada imediata caso o script carregue após o DOM
if (typeof songs !== 'undefined') {
  renderSongs(songs);
}
