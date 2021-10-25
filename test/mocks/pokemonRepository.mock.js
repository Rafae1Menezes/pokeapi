const sinon = require("sinon");
const PokemonRepository = require("../../src/repository/pokemonRepository");
const mocks = require("./pokemons.mock");

const pokemonRepositoryMock = new PokemonRepository();

const stub = sinon.stub(
  pokemonRepositoryMock,
  pokemonRepositoryMock.makeRequest.name
);

stub.withArgs(mocks.url.base).resolves(mocks.list);
stub.withArgs(mocks.url.pokemon1).resolves(mocks.validPokemons[0]);
stub.withArgs(mocks.url.pokemon2).resolves(mocks.validPokemons[1]);
stub.withArgs(mocks.url.pokemon3).resolves(mocks.validPokemons[2]);

module.exports = pokemonRepositoryMock;
