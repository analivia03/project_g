const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");
const tagButtons = document.querySelectorAll(".tags button");

let searchText = "";
let activeTag = null;

// busca por nome
inputSearch.addEventListener("input", () => {
  searchText = inputSearch.value.toLowerCase();
  render();
});

// clique nas tags
tagButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tag = button.dataset.tag;
    activeTag = tag === "" ? null : tag;
    render();
  });
});

function render() {
  content.innerHTML = "";

  const filteredSongs = songs.filter(song => {
    const matchName = song.name.toLowerCase().includes(searchText);
    const matchTag = activeTag ? song.tags.includes(activeTag) : true;

    return matchName && matchTag;
  });

  filteredSongs.forEach(song => {
    const div = document.createElement("div");
    div.textContent = song.name;
    content.appendChild(div);
  });
}
