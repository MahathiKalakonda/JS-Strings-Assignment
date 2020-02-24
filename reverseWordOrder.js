function getReverseWordOrder(string)
{
    let reverseWords = [], words = string.split(" ");
    for(let index = 0; index < words.length; index++)
    {
        reverseWords.unshift(words[index]);
    }
    reversedWords = reverseWords.join(" ");
    return reversedWords;
}

function main()
{
    let string = "Joey does not share  food";
    console.log("The reverse order of string : " + string + " is : " + getReverseWordOrder(string));
}

main()