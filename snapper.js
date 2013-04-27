var Snapper = function (options) {

  var webshot = require("webshot"),

  /**
   * Start getting the chunks of data from phantomJS
   * @param (Object) err The error object to pass to client if error is encountered
   * @param (Object) renderStream The one that we will listen to for a stream of data as screenshot is taken
   */
  getDataURL = function (err, renderStream) {
    if (err) return this.next(err);

    var self = this,
        data = "";

    renderStream.on("data", function (chunk) {
      data += chunk.toString("base64");
    });

    renderStream.on("end", function () {
      self.res.send(data);
      self.next();
    });
  },

  /**
   * Spawns phantomjs to take a screenshot of a page
   * @param (Object) req The object containing information about the client's request including params
   * @param (Object) res The object to send data from
   * @param (Function*) next The function to call when the screenshot is complete and data is fetched
   */
  snap = function (req, res, next) {
    webshot(req.params.url, options, getDataURL.bind({ res: res, next: next }));
  };

  return {
    snap: snap
  };
};

module.exports = Snapper;
