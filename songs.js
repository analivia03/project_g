const songs = [
  // SOUR
  {
    title: "Brutal",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/6SRsiMl7w1USE4mFqrOhHC?si=8c76f785dd8c4dcc",
    tags: ["ansiedade"]
  },
  {
    title: "Traitor",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/5CZ40GBx1sQ9agT82CLQCT?si=1fb9d6b6bdf343ca",
    tags: ["tristeza", "coracao_partido"]
  },
  {
    title: "Drivers License",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/5wANPM4fQCJwkGd4rN57mH?si=efbf777763d24f8b",
    tags: ["tristeza", "coracao_partido"]
  },
  {
    title: "1 Step Forward, 3 Steps Back",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/4wcBRRpIfesgcyUtis7PEg?si=eb93b9fddc714421",
    tags: ["tristeza", "raiva"]
  },
  {
    title: "Deja Vu",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/6HU7h9RYOaPRFeh0R3UeAr?si=31f81fb91c4a4b5a",
    tags: ["ciumes", "coracao_partido"]
  },
  {
    title: "Good 4 U",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/4ZtFanR9U6ndgddUvNcjcG?si=10dc5f1c608e4e7f",
    tags: ["raiva", "coracao_partido"]
  },
  {
    title: "Enough For You",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/2TOzTqQXNmR2zDJXihjZ2e?si=3a4d468a3e8d4558",
    tags: ["autoestima", "tristeza"]
  },
  {
    title: "Happier",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/2tGvwE8GcFKwNdAXMnlbfl?si=815d2d9c6aba4a84",
    tags: ["tristeza", "ciumes"]
  },
  {
    title: "Jealousy, Jealousy",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/0MMyJUC3WNnFS1lit5pTjk?si=d9155b784ff842c3",
    tags: ["ciumes", "comparacao"]
  },
  {
    title: "Favorite Crime",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/5JCoSi02qi3jJeHdZXMmR8?si=db8f284f4b164ac8",
    tags: ["culpa", "tristeza"]
  },
  {
    title: "Hope Ur Ok",
    album: "SOUR",
    cover: "images/sour.jpg",
    link: "https://open.spotify.com/intl-pt/track/1zejeOnykpCoyVSit6Bwp3?si=9b67667fc25343e2",
    tags: ["empatia"]
  },

  // GUTS
  {
    title: "All-american Bitch",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/6dhWwPex5g1B1hg7ezGj2b?si=336709d69c3640f0",
    tags: ["identidade", "raiva"]
  },
  {
    title: "Bad Idea Right?",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/27Cne97mFE21Ob0ScMewrV?si=be396dc6c3bd460f",
    tags: ["culpa", "ansiedade"]
  },
  {
    title: "Vampire",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/6gPOwGszseqYL7w02opoy1?si=37e3d55df6df4f25",
    tags: ["raiva", "coracao_partido"]
  },
  {
    title: "Lacy",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/5SShKhLCYFydCsO4L7ULMr?si=53b69036bca44384",
    tags: ["ciumes", "comparacao"]
  },
  {
    title: "Ballad of a Homeschooled Girl",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/5lfHlUT9WtSGw12jw7dSkk?si=10feaddd0b444c0e",
    tags: ["ansiedade", "identidade"]
  },
  {
    title: "Making the Bed",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/4HOWCLfKRlHhbsCCBsquSE?si=00936bbb5bbb4a2d",
    tags: ["culpa", "tristeza", "medo_do_passado"]
  },
  {
    title: "Logical",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/7E35A3DD14DVoE3rpCBmQj?si=aac3fcdd841844af",
    tags: ["tristeza", "coracao_partido"]
  },
  {
    title: "Get Him Back!",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/5D27wJnVQwYD7fAKaODHgs?si=28e5038714224761",
    tags: ["raiva", "ciumes"]
  },
  {
    title: "Love is Embarrassing",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/3jhlwdu8nU7hFTEGHUomN3?si=a5be0a10b1b6404e",
    tags: ["ansiedade", "culpa"]
  },
  {
    title: "The Grudge",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/6e5fsRfVK3jvrpUXJpG9mB?si=b871d0963db54dbb",
    tags: ["raiva", "tristeza", "medo_do_passado"]
  },
  {
    title: "Pretty Isn't Pretty",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/7IiOhvduGa8urDPC6l3CWo?si=d916712ff6584bf4",
    tags: ["comparacao", "autoestima"]
  },
  {
    title: "Teenage Dream",
    album: "GUTS",
    cover: "images/guts.jpg",
    link: "https://open.spotify.com/intl-pt/track/1dyfBMMklpbqRbuvjnVwap?si=a774c2391fe047ec",
    tags: ["medo_do_futuro", "ansiedade"]
  },

  // GUTS (spilled)
  {
    title: "Obsessed",
    album: "GUTS (spilled)",
    cover: "images/spilled.jpg",
    link: "https://open.spotify.com/intl-pt/track/6tNgRQ0K2NYZ0Rb9l9DzL8?si=3ae184dbdbb34551",
    tags: ["ciumes", "comparacao"]
  },
  {
    title: "Girl I've Always Been",
    album: "GUTS (spilled)",
    cover: "images/spilled.jpg",
    link: "https://open.spotify.com/intl-pt/track/0bJAmhSAeMSfsyazOEUVFf?si=2b03a3f70e0445df",
    tags: ["identidade"]
  },
  {
    title: "Scared of My Guitar",
    album: "GUTS (spilled)",
    cover: "images/spilled.jpg",
    link: "https://open.spotify.com/intl-pt/track/7JqH46zlr7XV7vMBt4slE6?si=0538cf0a5a0a4c71",
    tags: ["tristeza", "medo_do_futuro"]
  },
  {
    title: "Stranger",
    album: "GUTS (spilled)",
    cover: "images/spilled.jpg",
    link: "https://open.spotify.com/intl-pt/track/2U3jOPfO4wZZFaaWS4Dcj6?si=fa7c725640234908",
    tags: ["coracao_partido", "identidade"]
  },
  {
    title: "So American",
    album: "GUTS (spilled)",
    cover: "images/spilled.jpg",
    link: "https://open.spotify.com/intl-pt/track/5Jh1i0no3vJ9u4deXkb4aV?si=abb8e885bb384438",
    tags: ["amor"]
  },

  // You seem pretty sad for a girl so in love 
 
  
  {
    title: "Drop Dead",
    album: "You Seem Pretty Sad For A Girl So In Love",
    cover: "images/pretty_sad.jpg",
    link: "https://open.spotify.com/intl-pt/track/2U3jOPfO4wZZFaaWS4Dcj6?si=fa7c725640234908",
    tags: [ "amor"]
  },

//Emails I Can't Send

    {
    title: "Nonsense",
    album: "Emails I Can't Send",
    cover: "images/nonsense.jpg",
    link: "https://open.spotify.com/intl-pt/track/6dgUya35uo964z7GZXM07g?si=5ca7a4834bb746a2",
    tags: [ "geovanna"]
  },

      {
    title: "Juno",
    album: "Short n' Sweet",
    cover: "images/short.jpg",
    link: "https://open.spotify.com/intl-pt/track/21B4gaTWnTkuSh77iWEXdS?si=a16f644725824bbd",
    tags: [ "geovanna"]
  },

        {
    title: "House Tour",
    album: "Man's Best Friend",
    cover: "images/mans.jpg",
    link: "https://open.spotify.com/intl-pt/track/25jgQBxuUkGDdCG1WGKKN9?si=fe628da11cd04761",
    tags: [ "geovanna"]
  },

          {
    title: "Bad Chem",
    album: "Short n' Sweet",
    cover: "images/short.jpg",
    link: " https://open.spotify.com/intl-pt/track/1UHS8Rf6h5Ar3CDWRd3wjF?si=9fa03e80748348d2",
    tags: [ "geovanna"]
  }

 
];
