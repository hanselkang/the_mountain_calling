const fs = require("fs");
const jsonData = fs.readFileSync("_data/mountains.json", "utf8");

module.exports = function () {
  const mountains = JSON.parse(jsonData);
  const scottishHills = mountains.filter((mountain) => {
    return mountain.country === "S";
  });
  const englishHills = mountains.filter((mountain) => {
    return mountain.country === "E";
  });
  const welshHills = mountains.filter((mountain) => {
    return mountain.country === "W";
  });
  const irishHills = mountains.filter((mountain) => {
    return mountain.country === "I";
  });
  return {
    s_mountains: scottishHills,
    e_mountains: englishHills,
    w_mountains: welshHills,
    i_mountains: irishHills,
  };
};
