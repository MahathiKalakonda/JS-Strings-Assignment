function getReverse(elements)
{
    let reversedElements = [];
    for(let index = 0; index < elements.length; index++)
    {
        reversedElements.unshift(elements[index]);
    }
    return reversedElements;
}

function reverseWordOrder(sentence)
{
    let words = sentence.split(" ");
    let reverseWords = getReverse(words);
    reversedWords = reverseWords.join(" ");
    return reversedWords;
}

function main()
{
    let string = "Joey does not share  food";
    console.log("The reverse order of string : " + string + " is : " + getReverseWordOrder(string));
}

main()