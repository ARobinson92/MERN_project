const axios = require("axios");

let loaded = false;

const words = [
    "apple",
    "tomato",
    "barbarian",
    "lunatic",
    "billionaire",
    "audacity",
    "futile",
    "green",
];

const myWordObjects = [];

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    axios
        .get(
            `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1fd93f78-0bc6-4fd2-b7f4-0e5b6124d23d`
        )
        .then((res) => {
            defs = res.data[0].shortdef;
            // console.log(defs);
            myWordObjects.push({
                word: word,
                defs: defs,
            });
            console.log(myWordObjects);
        })
        .catch((err) => {
            console.error(err);
        });
}
