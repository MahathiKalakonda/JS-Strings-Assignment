function getVowelsCount(word)
{
    let vowelsRegEx = /[aeiouAEIOU]/g;
    let vowelsInWord = word.match(vowelsRegEx);
    console.log(vowelsInWord)
    let vowelsCount = vowelsInWord.length;
    return vowelsCount;
}

function printVowelCount(word, count)
{
    console.log("Number  of vowels in " + word +" is : " + count);
}

function main()
{
    let word = "CoffEe";
    let vowelCount = getVowelsCount(word);
    printVowelCount(word, vowelCount);
}

main()