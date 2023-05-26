const fs = require("fs");
const jsonData = fs.readFileSync("_data/mountains.json", "utf8");

module.exports = function () {
  const mountains = JSON.parse(jsonData);
  const scottishHills = mountains.filter((mountain) => {
    return mountain.country === "S";
  });

  return {
    mountains: scottishHills,
  };
};
