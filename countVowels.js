object = require('./countConsonants');
function main()
{
    let word = "CoffEe", vowelsPattern = /[aeiouAEIOU]/g;
    console.log("Number of vowels in " + word +" is : " + object.getMatchedCount(vowelsPattern, word));
}

main();