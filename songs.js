const songs = [
  {
    id: 1,
    name: "Traitor",
    album: "SOUR",
    tags: ["sad", "comparison"]
  },
  {
    id: 2,
    name: "Enough for You",
    album: "SOUR",
    tags: ["sad", "fear_of_future"]
  },
  {
    id: 3,
    name: "Logical",
    album: "GUTS",
    tags: ["comparison", "fear_of_future"]
  },
  {
    id: 4,
    name: "Good 4 U",
    album: "SOUR",
    tags: ["anger"]
  }
];
//https://www.rocketseat.com.br/blog/artigos/post/criando-uma-api-falsa-com-json-server
//pra baixar o json server: npm install -g json-server

//eu preciso inserir todas as musicas e criar as tags, e depois criar um endpoint pra cada tag, pra quando o usuario clicar na tag, ele mostrar as musicas com aquela tag. E depois criar um endpoint pra cada musica, pra mostrar os detalhes da musica. E depois criar um endpoint pra mostrar todas as musicas, e ai o usuario pode filtrar por tag ou por nome da musica.

//as tags das musicas de todos os ultimos albuns vao ser separadas em 10 categorias: "sad", "comparison", "fear_of_future", "anger", "love", "happiness", "nostalgia", "hope", "miss_the_past", "anxiety". E ai o usuario pode clicar em uma tag e mostrar todas as musicas com aquela tag, ou clicar em uma musica e mostrar os detalhes da musica, ou clicar em todas as musicas e filtrar por tag ou por nome da musica.    


module.exports = songs;