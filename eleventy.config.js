import pluginRss from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Single line breaks stay line breaks, so poems keep their shape.
  eleventyConfig.setLibrary("md", markdownIt({ html: true, breaks: true, typographer: false }));

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addCollection("writing", (api) =>
    api.getFilteredByGlob("src/writing/*.md").sort((a, b) => {
      const d = b.date - a.date;
      return d !== 0 ? d : (a.data.order ?? 0) - (b.data.order ?? 0);
    })
  );

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("ofKind", (items, kind) => items.filter((i) => i.data.kind === kind));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
