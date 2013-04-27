var config = require("config"),
    Snapper = require("./snapper"),
    restify = require("restify"),
    server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get("/:url", new Snapper(config.snapper).snap);

server.listen(config.port, function () {
  console.log("%s listening at %s", server.name, server.url);
});
