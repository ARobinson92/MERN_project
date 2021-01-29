import axios from 'axios'

import originalValueList from './wordList.jsx'

async function getValuesList() {
    const originalValueList = wordList();
    valuesListWithDefs = [];
    for (var i=0; i< originalValueList.length; i++) {
        var word = originalValueList[i];
        await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1fd93f78-0bc6-4fd2-b7f4-0e5b6124d23d`)
        .then ((res) => {
            var singleVal = {
                'label': res.data[0].meta.id,
                'value': res.data[0].shortdef,
                'freq': 0,
            }
            valuesListWithDefs.push(singleVal);
            if(valuesListWithDefs.length >= originalValueList.length) {
                values.push(valuesListWithDefs);
            }
        })
        .catch(err=>{
            console.log('There was an error: ', err)
            return err;
        });
        return valuesListWithDefs;
    }
}
export default getValuesList;