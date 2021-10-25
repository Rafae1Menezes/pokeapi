const { expect } = require("chai");
const { describe, it, before } = require("mocha");
const defaultFactory = require("../../src/defaultFactory");
const TeamService = require("../../src/service/teamService");

describe("Default Factory", () => {
  it("should return the default dependecies", () => {
    const dependecies = defaultFactory();

    expect(dependecies.teamService instanceof TeamService).to.be.true;
  });
});
