const PokemonRepository = require("./repository/pokemonRepository");
const TeamService = require("./service/teamService");

const defaultFactory = () => {
  return {
    teamService: new TeamService({
      pokemonRepository: new PokemonRepository(),
    }),
  };
};

module.exports = defaultFactory;
