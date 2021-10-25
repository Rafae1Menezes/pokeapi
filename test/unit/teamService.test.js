const { describe, it, before, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const TeamService = require("../../src/service/teamService");

const pokemonRepositoryMock = require("../mocks/pokemonRepository.mock");
const mocks = require("../mocks/pokemons.mock");

describe("TeamService Suite Tests", () => {
  let teamService = {};
  let pokemonRepository = {};
  let sandbox = {};

  before(() => {
    pokemonRepository = pokemonRepositoryMock;
    teamService = new TeamService({ pokemonRepository });
  });

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should return a random item from an array", () => {
    const list = [5, 6, 7, 8, 9];
    const item = teamService.getRandomItemFromArray(list);
    expect(list.includes(item)).to.be.true;
  });

  it("should return multiple random items from an array", () => {
    const list = [4, 5, 6, 7, 8, 10, 11, 12];
    const amount = 3;

    const spy = sandbox.spy(
      teamService,
      teamService.getRandomItemFromArray.name
    );

    const items = teamService.getMultipleRandomItemsFromArray(list, amount);

    items.forEach((item) => expect(list.includes(item)));
    expect(spy.callCount).to.be.equal(amount);
  });

  it("should return a full team with 3 random pokemons, each one with 3 moves", async () => {
    const expected = mocks.validTeam;
    const teamRawMocked = mocks.validRawTeam;

    sandbox
      .stub(teamService, teamService.getMultipleRandomItemsFromArray.name)
      .onFirstCall()
      .returns(teamRawMocked);

    const result = await teamService.getTeam();

    expect(result).to.be.deep.equal(expected);
  });
});
