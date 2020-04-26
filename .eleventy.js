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



// NEXT PREV links
function nextPrevPage(coll, i) {
  let prevPage, nextPage;

  if (i === 0) {
    prevPage = coll[coll.length-1];
  } else {
    prevPage = coll[i-1];
  }

  if (i === coll.length - 1) {
    nextPage = coll[0];
  } else {
    nextPage = coll[i + 1];
  }

  return {
    prevPage: prevPage.url,
    nextPage: nextPage.url
  }
}


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

  eleventyConfig.addFilter("stringify", function(object) {
    return JSON.stringify(object);
  });

  eleventyConfig.addPassthroughCopy("_redirects");




  // CSS3 Logos
  eleventyConfig.addCollection("css3logos", (collection) => {
    let coll = collection.getFilteredByGlob('src/css3-logos/*.njk').filter(page => 
        page.url
        && ! page.inputPath.includes('index.njk')
        && page.inputPath.startsWith('./src/css3-logos/') 
    );

    coll = coll.sort((a,b) => {
      if (a.fileSlug < b.fileSlug) {
        return -1
      } else if (a.fileSlug > b.fileSlug) {
        return 1;
      } else {
        return 0;
      }
    });
    
    // add links to prev next pages
    coll = coll.map((page, i) => {
      page.data = {
        ...page.data,
        ...nextPrevPage(coll, i)
      };

      return page;
    })

    return coll;
  });

  eleventyConfig.addCollection("css3logosshowcase", (collection) => {
    let coll = collection.getFilteredByGlob('src/css3-logos/*.njk').filter(page => 
      page.url
      && ! page.inputPath.includes('index.njk')
      && page.inputPath.startsWith('./src/css3-logos/') 
      && page.data.tags
      && page.data.tags.includes('showcase')
    );

    let customOrder = []
    customOrder.push(coll[0]);
    customOrder.push(coll[3]);
    customOrder.push(coll[4]);
    customOrder.push(coll[1]);
    customOrder.push(coll[2]);

    return customOrder;

  });


  // CSS PATTERNS
  eleventyConfig.addCollection("css3patterns", (collection) => {
    let coll = collection.getAll().filter(page => 
        page.url
        && ! page.inputPath.includes('index.njk')
        && page.inputPath.startsWith('./src/css3-patterns/') 
    );

    coll = coll.sort((a,b) => {
      if (a.fileSlug < b.fileSlug) {
        return 1
      } else if (a.fileSlug > b.fileSlug) {
        return -1;
      } else {
        return 0;
      }
    });
    
    // add links to prev next pages
    coll = coll.map((page, i) => {
      page.data = {
        ...page.data,
        ...nextPrevPage(coll, i)
      };

      return page;
    })

    return coll;
  });


  // eleventyConfig.addCollection("css3patterns", function(collection) {
    
  //   let coll = collection.items.filter(page => {
  //     return page.fileSlug !== 'css3-patterns' && page.url.includes('css3-patterns');
  //   });

  //   coll = coll.map((item, i) => {
  //     return {
  //       ...item.data,
  //       ...nextPrevPage(coll, i)
  //     }
  //   });
  
  //   console.log('\n\n\n', collection, '\n\n\n');
  //   console.log('\n\n\n', coll, '\n\n\n');
    
  //   return coll;
  // });



  // CSS LOGOS
  // eleventyConfig.addCollection("css3logos", function(collection) {
  //   const coll = collection.filter(page => {
  //     return page.fileSlug !== 'css3-logos' && page.url.includes('css3-logos');
  //   });

  //   coll[i].data = {
  //     ...coll[i].data,
  //     ...nextPrevPage(coll, i)
  //   }
  
  //   return coll;
  // });

  // eleventyConfig.addCollection("css3logoshowcase", function(collection) {
  //   const coll = collection.getFilteredByTag("css3logoshowcase");
  //   return coll;
  // });

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
