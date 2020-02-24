function getReverseWord(word)
{
    let reversedWord = "";
    for(let index = 0; index < word.length; index++)
    {
        let complimentaryIndex = word.length - index - 1;
        reversedWord = reversedWord.concat(word[complimentaryIndex]);
    }
    return reversedWord;
}

function main()
{
    console.log("Reverse of Mahathi is : " + getReverseWord("Mahathi"));
    console.log("Reverse of Thank You is : " + getReverseWord("Thank You"));
}

main();