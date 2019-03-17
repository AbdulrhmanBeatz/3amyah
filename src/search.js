
const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function search(word) {
    let res = await fetch("https://3amyah.com/word/ajaxSearch?s="+ encodeURIComponent(word));
    let json = await res.json();
    return json.data.wordList;
}

module.exports = search;