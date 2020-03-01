function getReverseWordSentence(sentence)
{
    return sentence.split(" ").reduce(function(resultSentence, word)
                {   return word + " " + resultSentence;
                });
}

function main()
{
    let string = "Joey does not share  food";
    console.log("The reverse order of string : " + string + " is : " + getReverseWordSentence(string));
}

main()