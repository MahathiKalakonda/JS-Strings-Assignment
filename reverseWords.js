function getReverse(elements)
{
    let reversedElements = [];
    for(let index = 0; index < elements.length; index++)
    {
        reversedElements.unshift(elements[index]);
    }
    return reversedElements;
}

function reverseWords(sentence)
{
    let words = sentence.split(" "), reversedWords = [];
    for(let index = 0; index < words.length; index++)
    {
        let word = words[index].split("");
        let reversedWord = getReverse(word).join("");
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ");
}

function main()
{
    console.log("Reversed Words of Hello World is : " + reverseWords("Hello World"));
    console.log("Reversed Words of This is Mahathi is : " + reverseWords("This is Mahathi"));
}

main();