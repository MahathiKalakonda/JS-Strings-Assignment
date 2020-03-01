function getMatchedCount(pattern, word)
{
    var matchedWords = word.match(pattern);
    return word.match(pattern).length;
}

function main()
{
    var word = "Water BoTtle", consonantsPattern = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/g;
    console.log("Number of consonants in " + word +" is : " + getMatchedCount(consonantsPattern, "Water BoTtle"));
}

module.exports = {
         getMatchedCount,
         main
         }