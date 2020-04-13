// SYNTAX HIGHLIGHTING
const Prism = require('prismjs');
Prism.plugins.LineNumbers = true;

addLineNumbers = function(code) {
  let lineNumbers = '';
  for(let i=1; i<=200; i++) {
    lineNumbers += `<span>${i}</span>`
  }
  return `${code}<span class='line-numbers'>${lineNumbers}</span>`;
}



// BEAUTIFY CODE
const beautifyHTML = require('js-beautify').html;
const beautifyCSS = require('js-beautify').css;

const beautifySettings = {
  "indent_size": "2",
  "indent_char": " ",
  "end_with_newline": false,
};



// MINIFY CSS
const CleanCSS = require("clean-css");



module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images')

  eleventyConfig.addFilter("htmlCode", function(value) {
    let code = beautifyHTML(value, beautifySettings)
    code = Prism.highlight(code, Prism.languages.html, 'html');
    code = addLineNumbers(code);
    return code;
  });

  eleventyConfig.addFilter("cssCode", function(value) {
    let code = beautifyCSS(value, beautifySettings)
    code = Prism.highlight(code, Prism.languages.css, 'css');
    code = addLineNumbers(code);
    return code;
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return code ? new CleanCSS({}).minify(code).styles : '';
  });

  eleventyConfig.addPassthroughCopy("_redirects");

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
