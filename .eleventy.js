module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("logo.png");
  eleventyConfig.addPassthroughCopy("pattern.png");
  eleventyConfig.addPassthroughCopy("background.png");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("steam-icon.svg");
  eleventyConfig.addPassthroughCopy("discord-icon.svg");
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    pathPrefix: "/"
  };
};
