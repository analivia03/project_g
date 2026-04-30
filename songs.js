// dados

// ====== TAGS ======
// "anxiety", "comparison", "fear_of_future", "anger", "love_light", "happiness", "nostalgia", "hope", "miss_the_past", "guilt", "self_worth", "identity", "toxic_relationship", "jealousy", "sadness", "healing", "confusion", "impulse", "vulnerability", "pressure"

const songs = [
  // ===== SOUR =====
  {
    id: 1,
    name: "Brutal",
    album: "SOUR",
    tags: ["anxiety", "comparison", "insecurity", "identity"]
  },
  {
    id: 2,
    name: "Traitor",
    album: "SOUR",
    tags: ["heartbreak", "sadness", "guilt"]
  },
  {
    id: 3,
    name: "Drivers License",
    album: "SOUR",
    tags: ["heartbreak", "jealousy", "comparison", "sadness"]
  },
  {
    id: 4,
    name: "1 Step Forward, 3 Steps Back",
    album: "SOUR",
    tags: ["toxic_relationship", "insecurity", "sadness", "self_worth"]
  },
  {
    id: 5,
    name: "Deja Vu",
    album: "SOUR",
    tags: ["comparison", "jealousy", "heartbreak", "anger"]
  },
  {
    id: 6,
    name: "Good 4 U",
    album: "SOUR",
    tags: ["anger", "heartbreak", "jealousy"]
  },
  {
    id: 7,
    name: "Enough For You",
    album: "SOUR",
    tags: ["self_worth", "insecurity", "sadness", "guilt"]
  },
  {
    id: 8,
    name: "Happier",
    album: "SOUR",
    tags: ["sadness", "jealousy", "healing"]
  },
  {
    id: 9,
    name: "Jealousy, Jealousy",
    album: "SOUR",
    tags: ["comparison", "insecurity", "anxiety"]
  },
  {
    id: 10,
    name: "Favorite Crime",
    album: "SOUR",
    tags: [ "guilt", "self_worth", "sadness"]
  },
  {
    id: 11,
    name: "Hope Ur Ok",
    album: "SOUR",
    tags: ["empathy", "healing", "identity"]
  },

  // ===== GUTS =====
  {
    id: 12,
    name: "All-American Bitch",
    album: "GUTS",
    tags: ["anger", "insecurity", "identity", "pressure"]
  },
  {
    id: 13,
    name: "Bad Idea Right?",
    album: "GUTS",
    tags: ["impulse", "anger", "heartbreak"]
  },
  {
    id: 14,
    name: "Vampire",
    album: "GUTS",
    tags: [ "anger", "guilt", "self_worth"]
  },
  {
    id: 15,
    name: "Lacy",
    album: "GUTS",
    tags: ["comparison", "jealousy", "insecurity"]
  },
  {
    id: 16,
    name: "Ballad of a Homeschooled Girl",
    album: "GUTS",
    tags: ["anxiety", "insecurity", "identity"]
  },
  {
    id: 17,
    name: "Making the Bed",
    album: "GUTS",
    tags: ["guilt", "self_worth", "identity"]
  },
  {
    id: 18,
    name: "Logical",
    album: "GUTS",
    tags: ["confusion", "self_worth"]
  },
  {
    id: 19,
    name: "Get Him Back!",
    album: "GUTS",
    tags: ["anger", "heartbreak", "confusion"]
  },
  {
    id: 20,
    name: "Love Is Embarrassing",
    album: "GUTS",
    tags: ["insecurity", "heartbreak", "self_worth"]
  },
  {
    id: 21,
    name: "The Grudge",
    album: "GUTS",
    tags: ["anger", "sadness", "heartbreak"]
  },
  {
    id: 22,
    name: "Pretty Isn’t Pretty",
    album: "GUTS",
    tags: ["comparison", "insecurity", "self_worth"]
  },
  {
    id: 23,
    name: "Teenage Dream",
    album: "GUTS",
    tags: ["fear_of_future", "identity", "anxiety"]
  },

  // ===== GUTS (spilled) =====
  {
    id: 24,
    name: "Obsessed",
    album: "GUTS (spilled)",
    tags: ["jealousy", "comparison", "anxiety"]
  },
  {
    id: 25,
    name: "Girl I’ve Always Been",
    album: "GUTS (spilled)",
    tags: ["identity", "healing", "self_worth"]
  },
  {
    id: 26,
    name: "Scared of My Guitar",
    album: "GUTS (spilled)",
    tags: ["vulnerability", "identity", "fear"]
  },
  {
    id: 27,
    name: "Stranger",
    album: "GUTS (spilled)",
    tags: ["healing", "heartbreak", "sadness"]
  },
  {
    id: 28,
    name: "So American",
    album: "GUTS (spilled)",
    tags: ["love_light", "happiness", "healing"]
  },

   
// ===== You Seem Pretty Sad for a Girl So in Love =====
{
  id: 29,
  name: "Drop Dead",
  album: "NEW ALBUM",
  tags: ["anxiety", "love_light", "happiness"]
}


];
//https://www.rocketseat.com.br/blog/artigos/post/criando-uma-api-falsa-com-json-server
//pra baixar o json server: npm install -g json-server

//eu preciso inserir todas as musicas e criar as tags, e depois criar um endpoint pra cada tag, pra quando o usuario clicar na tag, ele mostrar as musicas com aquela tag. E depois criar um endpoint pra cada musica, pra mostrar os detalhes da musica. E depois criar um endpoint pra mostrar todas as musicas, e ai o usuario pode filtrar por tag ou por nome da musica.

//as tags das musicas de todos os ultimos albuns vao ser separadas em 10 categorias: "sad", "comparison", "fear_of_future", "anger", "love", "happiness", "nostalgia", "hope", "miss_the_past", "anxiety". E ai o usuario pode clicar em uma tag e mostrar todas as musicas com aquela tag, ou clicar em uma musica e mostrar os detalhes da musica, ou clicar em todas as musicas e filtrar por tag ou por nome da musica.    


window.songs = songs;
