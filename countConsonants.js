function getMatchedCount(pattern, word)
{
    var matchedWords = word.match(pattern);
    let matchedCount = matchedWords.length;
    return matchedCount;
}

function main()
{
    var word = "Water BoTtle", consonantsPattern = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/g;
    console.log("Number of consonants in " + word +" is : " + getMatchedCount(consonantsPattern, "Water BoTtle"));
}

//module.exports = {
//getMatchedCount,
//main
//}

//module.exports = getMatchedCount;

exports = {
         getMatchedCount,
         main
         }