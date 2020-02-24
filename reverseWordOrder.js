function getReverseWordOrder(string)
{
    let reverseWordsList = [], wordsList = string.split(" ");
    for(let index = 0; index < wordsList.length; index++)
    {
        reverseWordsList.unshift(wordsList[index]);
    }
    reverseWordsString = reverseWordsList.join(" ");
    return reverseWordsString;
}

function printReverseOrderWords(string, reverseOrderString)
{
    console.log("The reverse order of string : " + string + " is : " + reverseOrderString);
}

function main()
{
    let string = "Joey does not share  food";
    printReverseOrderWords(string, getReverseWordOrder(string));
}

main()