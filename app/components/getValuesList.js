import axios from "axios";
import wordList from "./wordList.js";

async function getValuesList() {
    const rawList = wordList();
    
    console.log("I have only been able to get this file to pull one result from the API , and I ",
    "still can't read it outside of this file. However if anyone feels like trying, it would",
    " be cool to get the API pull out of our screen and into a separate component...");
    
    const finList = [];
    for (var i = 0; i < rawList.length; i++) {
        var word = rawList[i];
        await axios
            .get(
                // `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1fd93f78-0bc6-4fd2-b7f4-0e5b6124d23d`
            )
            .then((res) => {
                var singleVal = {
                    label: res.data[0].meta.id,
                    value: res.data[0].shortdef,
                    freq: 0,
                };
                finList.push(singleVal);
            })
            .catch((err) => {
                console.log("There was an error: ", err);
                return err;
            });
        console.log(finList);
        return finList;
    }
    return finList;
}
export default getValuesList;
