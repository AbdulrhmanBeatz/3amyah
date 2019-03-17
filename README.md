# 3amyah
Scrapper &amp; Wrapper For 3amyah.com .

## Installation
```
npm install 3amyah
```

## Usage
```js
const _3amyah = require("3amyah");

_3amyah.search("شكو ماكو").then(words => {
  console.log(words);
})
```

## Response Example
### Search
```js
search(word) -->
[
  {
    id: Number,
    word: String,
    definition: String,
    example: String,
    author: String,
    upVoteCount: Number,
    downVoteCount: Number,
    dateCreate: Date (ISO 8601),
    pronunciationFileName: String,
    person?:
     { id: Number,
       name: String,
       profileImageName20: String 
     },
    countryList: Array(String),
    landingMap: Object } ]
  }
]
```
