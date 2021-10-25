const { describe, it, before } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const api = require("../../src/api");

const TeamService = require("../../src/service/teamService");
const PokemonRepository = require("../../src/repository/pokemonRepository");
const mocks = require("../mocks/pokemons.mock");
const SERVER_PORT = 4000;

describe("E2E API Suite Test", () => {
  let app = {};

  before(() => {
    const pokemonRepository = new PokemonRepository();
    const teamService = new TeamService({ pokemonRepository });
    const instance = api({ teamService });

    app = {
      instance: instance,
      server: instance.inicilizate(SERVER_PORT),
    };
  });

  describe("/team:get", () => {
    it("should return HTTP status 200 when /team is called", async () => {
      const teamSize = 3;
      const mockedPokemonStrucked = mocks.validPokemons[0];
      const result = await request(app.server).get("/team").expect(200);
      const { team } = result.body;

      expect(team.length).to.be.equal(teamSize);

      team.forEach((pokemon) => {
        expect(Object.keys(pokemon)).to.be.deep.equal(
          Object.keys(mockedPokemonStrucked)
        );

        expect(pokemon.name).to.not.be.empty;
        expect(pokemon.moves.length).to.be.greaterThan(0);
      });
    });
  });

  describe("/", () => {
    it("should redirect to / if trying call an inexisting route", async () => {
      const expected = { success: "Default Route" };
      const result = await request(app.server).get("/hi").expect(200);
      const success = result.body;

      expect(success).to.be.deep.equal(expected);
    });
  });
});
