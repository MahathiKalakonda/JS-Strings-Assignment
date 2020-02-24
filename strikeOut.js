function strikeOut(sentence, strikeSymbol)
{
    var strikeSymbol = strikeSymbol[0], resultSentence = '';
    for(let index = 0; index < sentence.length; index++)
    {
        if(sentence[index] == strikeSymbol)
            resultSentence = resultSentence + '-';
        else  resultSentence = resultSentence + sentence[index];
    }
    return resultSentence;
}

function main()
{
    console.log("The sentence 'Hello Fellow' after striking out 'l' is : " + strikeOut('Hello Fellow', 'l'));
}

main();