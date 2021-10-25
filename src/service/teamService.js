const DEFALT_TEAM_SIZE = 3;

class TeamService {
  constructor({ pokemonRepository }) {
    this.pokemonRepository = pokemonRepository;
  }

  getRandomItemFromArray(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  getMultipleRandomItemsFromArray(list, amount) {
    return Array(amount)
      .fill(0)
      .map(() => this.getRandomItemFromArray(list));
  }

  async getTeam(teamSize = DEFALT_TEAM_SIZE) {
    const list = await this.pokemonRepository.list();
    const teamRaw = this.getMultipleRandomItemsFromArray(list, teamSize);

    const team = await Promise.all(
      teamRaw.map(async (pokemonRaw) => {
        return await this.pokemonRepository.find(pokemonRaw.url);
      })
    );

    return team;
  }
}

module.exports = TeamService;
