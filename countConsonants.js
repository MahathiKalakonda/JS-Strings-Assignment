function getMatchedCount(pattern, word)
{
    let matchedWords = word.match(pattern);
    let matchedCount = matchedWords.length;
    return matchedCount;
}

function main()
{
    let word = "Water BoTtle", consonantsPattern = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/g;
    console.log("Number of consonants in " + word +" is : " + getMatchedCount(consonantsPattern, word));
}

main()