module.exports = function(eleventyConfig) {
  // Výchozí výstupní složka: _site
  // Zkopírovat `images/` do `_site/images`
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat `css/` to `_site/css/`
  eleventyConfig.addPassthroughCopy("css");
  // Zkopírovat `documents/` to `_site/css/`
  eleventyConfig.addPassthroughCopy("documents");
  // Zkopírovat `photos/` to `_site/css/`
  eleventyConfig.addPassthroughCopy("photos");
   // Zkopírovat `JS/` to `_site/css/`
   eleventyConfig.addPassthroughCopy("JS");

  return {
    //možní formáty šablon
    templateFormats: ["njk", "html", "liquid", "md"],
    //jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

 };
 