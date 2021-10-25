const http = require("http");
const defaultFactory = require("./defaultFactory");

const DEFAULT_PORT = 3000;
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

class Api {
  constructor(dependencies = defaultFactory()) {
    this.teamService = dependencies.teamService;
  }

  generateRoutes() {
    return {
      "/team:get": async (request, response) => {
        const team = await this.teamService.getTeam(3);
        response.write(JSON.stringify({ team }));
        response.end();
      },
      default: async (request, response) => {
        response.write(JSON.stringify({ success: "Default Route" }));
        response.end();
      },
    };
  }

  handler(request, response) {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;
    const routes = this.generateRoutes();
    const chosen = routes[routeKey] || routes.default;
    response.writeHead(200, DEFAULT_HEADERS);
    return chosen(request, response);
  }

  inicilizate(port = DEFAULT_PORT) {
    const app = http
      .createServer(this.handler.bind(this))
      .listen(port, () => console.log("App running at", port));
    return app;
  }
}

if (process.env.NODE_ENV !== "test") {
  const app = new Api();
  app.inicilizate();
}

module.exports = (dependencies) => new Api(dependencies);
