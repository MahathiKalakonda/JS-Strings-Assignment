function getTitleCase(word)
{
    return word[0].toUpperCase()+word.slice(1);
}

function getCamelCase(words)
{
    camelCase = words[0].toLowerCase();
    for(let index = 1; index < words.length; index++)
    {
        let titleCaseWord = getTitleCase(words[index].toLowerCase());
        camelCase = camelCase.concat(titleCaseWord);
    }
    return camelCase;
}

function printCamelCaseWord(camelCaseWord)
{
    console.log("Camel case word is : " + camelCaseWord);
}

function main()
{
    console.log("Camel case word is : " + getCamelCase(["this", "is", "mY", "sandWich"]));
}

main();