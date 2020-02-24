function getMatchedCount(regularExpression, word)
{
    let matchedWords = word.match(regularExpression);
    let vowelsCount = matchedWords.length;
    return vowelsCount;
}

function printConsonantCount(word, count)
{
    console.log("Number of consonants in " + word +" is : " + count);
}

function main()
{
    let word = "Water BoTtle", consonantsRegExp = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/g;
    console.log("Number of consonants in " + word +" is : " + getMatchedCount(consonantsRegExp, word));
}

main()