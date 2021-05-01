const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/OC1", {
      target:
        "https://oc1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/OC1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/BR1", {
      target:
        "https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      changeOrigin: true,
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/BR1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/EUN1", {
      target:
        "https://eun1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/EUN1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/EUW1", {
      target:
        "https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/EUW1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/JP1", {
      target:
        "https://jp1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/JP1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/KR1", {
      target:
        "https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/KR1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/LA1", {
      target:
        "https://la1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/LA1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/LA2", {
      target:
        "https://la2.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/LA2": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/NA1", {
      target:
        "https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/NA1": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/RU", {
      target:
        "https://ru.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/RU": "" }, // remove leading text to match real API urls
    })
  );
  app.use(
    createProxyMiddleware("/TR1", {
      target:
        "https://tr1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      secure: "false",
      changeOrigin: true,
      pathRewrite: { "^/TR1": "" }, // remove leading text to match real API urls
    })
  );
};
