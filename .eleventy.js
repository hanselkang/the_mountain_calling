module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/main.css");
  eleventyConfig.addPassthroughCopy("src/js/scottish_hills.js");
  eleventyConfig.addCollection("filteredMountains", function (collection) {
    const mountains = collection.getFilteredByGlob(
      "./src/_data/scottish_hills.js"
    );
    return mountains;
  });
};
