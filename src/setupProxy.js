const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/OC1", {
      target:
        "https://oc1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/BR1", {
      target:
        "https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/EUN1", {
      target:
        "https://eun1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/EUW1", {
      target:
        "https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/JP1", {
      target:
        "https://jp1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/KR1", {
      target:
        "https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/LA1", {
      target:
        "https://la1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/LA2", {
      target:
        "https://la2.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/NA1", {
      target:
        "https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/RU", {
      target:
        "https://ru.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
  app.use(
    proxy("/TR1", {
      target:
        "https://tr1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
    })
  );
};
