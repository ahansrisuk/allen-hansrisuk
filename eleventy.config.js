export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/styles.css");
  eleventyConfig.addPassthroughCopy("./src/assets/reset.css");

  return {
    dir: {
     input: "src",
     output: "public",
   }
 }};
