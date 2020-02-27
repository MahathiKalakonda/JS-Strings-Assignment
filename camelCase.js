function getTitleCase(word)
{
    return word[0].toUpperCase()+word.slice(1).toLowerCase();
}

function getCamelCase(words)
{
    return words.slice(1).reduce((accumulator,word) =>
                            accumulator.concat(getTitleCase(word)),
                            words[0].toLowerCase());
}

function main()
{
    console.log(getTitleCase("mahati"));
    console.log("Camel case word is : " + getCamelCase(["This", "iS", "mY", "sandWich"]));
}

main();