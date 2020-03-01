function strikeOut(sentence, strikeSymbol)
{
    var strikeSymbol = strikeSymbol[0];
    return sentence.split('').reduce(function(resultSentence, letter)
                {       return resultSentence + (letter == strikeSymbol ? '-' : letter);
                }, '');
}

function main()
{
    console.log("The sentence 'Hello Fellow' after striking out 'l' is : " + strikeOut('Hello Fellow', 'l'));
}

main();