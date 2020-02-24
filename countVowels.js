function getMatchedCount(regularExpression, word)
{
    let matchedWords = word.match(regularExpression);
    let vowelsCount = matchedWords.length;
    return vowelsCount;
}


function main()
{
    let word = "CoffEe", vowelsRegExp = /[aeiouAEIOU]/g;
    console.log("Number of vowels in " + word +" is : " + getMatchedCount(vowelsRegExp, word));
}

main()