function getTitledCase(word)
{
    return word[0].toUpperCase()+word.slice(1);
}

function getCamelCaseString(words)
{
    camelCaseString = words[0].toLowerCase();
    for(let index = 1; index < words.length; index++)
    {
        let titledWord = getTitledCase(words[index].toLowerCase());
        camelCaseString = camelCaseString.concat(titledWord);
    }
    return camelCaseString;
}

function printCamelCaseWord(camelCaseWord)
{
    console.log("Camel case word is : " + camelCaseWord);
}

function main()
{
    printCamelCaseWord(getCamelCaseString(["this", "is", "mY", "sandWich"]));
}

main();