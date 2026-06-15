const path = require("node:path");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("pattern.png");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("presskit/**/*.{css,js,png,jpg,jpeg,gif,ico,mp4,webm,mov,zip}");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    widths: ["auto"],
    formats: ["png"],
    outputDir: "_site",
    urlPath: "/",
    sharpJpegOptions: {
      quality: 90,
      mozjpeg: true,
    },
    sharpPngOptions: {
      compressionLevel: 9,
      effort: 10,
      palette: true,
    },
    filenameFormat: (id, src, width, format) => {
      const extension = format === "jpeg" ? "jpg" : format;
      return `${path.basename(src, path.extname(src))}.${extension}`;
    },
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    pathPrefix: "/"
  };
};
