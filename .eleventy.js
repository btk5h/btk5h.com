const emoji = require("node-emoji");

module.exports = function (config) {
  config.addPassthroughCopy({ "src/_assets": "/" });

  config.addFilter("emoji", emoji.get);

  return {
    dir: {
      input: "src",
      layouts: "_layouts",
    },
  };
};
