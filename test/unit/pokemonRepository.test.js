const { describe, it, before } = require("mocha");
const { expect } = require("chai");

const PokemonRepository = require("../../src/repository/pokemonRepository");
const pokemonRepositoryMock = require("../mocks/pokemonRepository.mock");
const mocks = require("../mocks/pokemons.mock");

describe("PokemonRepository Suite Tests", () => {
  let pokemonRepository = {};

  before(() => {
    pokemonRepository = pokemonRepositoryMock;
  });

  it("should call the specified url when makeRequest is called", async () => {
    const expected = mocks.list;
    const result = await pokemonRepository.makeRequest(mocks.url.base);
    expect(result).to.be.deep.equal(expected);
  });

  it("should return a list of pokemons when listPokemons is called", async () => {
    const expected = mocks.list.results;
    const result = await pokemonRepository.list();
    expect(result).to.be.deep.equal(expected);
  });

  it("should return an specific pokemon when findPokemon is called", async () => {
    const expected = mocks.validPokemons[0];
    const result = await pokemonRepository.find(mocks.url.pokemon1);
    expect(result).to.be.deep.equal(expected);
  });
});
