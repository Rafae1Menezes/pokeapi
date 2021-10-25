const url = {
  base: "https://pokeapi.co/api/v2/pokemon",
  pokemon1: "https://pokeapi.co/api/v2/pokemon/13/",
  pokemon2: "https://pokeapi.co/api/v2/pokemon/17/",
  pokemon3: "https://pokeapi.co/api/v2/pokemon/18/",
};

const validTeam = [
  {
    name: "bulbasaur",
    moves: ["razor-wind", "swords-dance"],
  },
  {
    name: "ivysaur",
    moves: ["swords-dance", "cut", "bind", "vine-whip"],
  },
  {
    name: "venusaur",
    moves: ["bind", "vine-whip"],
  },
];

const validRawTeam = [
  { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/13/" },
  { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/17/" },
  { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/18/" },
];

const list = {
  count: 1154,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/12/",
    },
    { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
    { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
    { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
    { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
    { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
    { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
    { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
    { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
  ],
};

const validPokemons = [
  {
    name: "bulbasaur",
    moves: ["razor-wind", "swords-dance"],
  },
  {
    name: "ivysaur",
    moves: ["swords-dance", "cut", "bind", "vine-whip"],
  },
  {
    name: "venusaur",
    moves: ["bind", "vine-whip"],
  },
];

const mocks = {
  url,
  validPokemons,
  validTeam,
  validRawTeam,
  list,
};

module.exports = mocks;
