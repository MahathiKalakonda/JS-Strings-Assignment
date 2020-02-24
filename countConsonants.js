function getConsonantsCount(word)
{
    let consonantsRegEx = /[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/g;
    let consonantsInWord = word.match(consonantsRegEx);
    let consonantsCount = consonantsInWord.length;
    return consonantsCount;
}

function printConsonantCount(word, count)
{
    console.log("Number of consonants in " + word +" is : " + count);
}

function main()
{
    let word = "Water BoTtle";
    let consonantCount = getConsonantsCount(word);
    printConsonantCount(word, consonantCount);
}

main()