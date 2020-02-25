function getMatchedWords(pattern, word)
{
    let matchedWords = word.match(pattern);
    return matchedWords;
}

function computeUniqueElementCount(elements)
{
    let uniqueElements = [];
    for(let index = 0; index < elements.length; index++)
    {
        if(uniqueElements.indexOf(elements[index]) == -1)
            uniqueElements.push(elements[index]);
    }
    return uniqueElements.length;
}

function getUniqueLetterCount(sentence)
{
    let lowerCaseSentence = sentence.toLowerCase(), lowerCaseLettersPattern = /[a-z]/g;
    let letters = getMatchedWords(/[a-z]/g, lowerCaseSentence);
    let uniqueLetterCount = computeUniqueElementCount(letters);
    return uniqueLetterCount;
}

function main()
{
    console.log("Number of unique letters in 'HelLo WorLd' is : " + getUniqueLetterCount('HelLo WorLd'));
    console.log("Number of unique letters in 'Mahathi Kalakonda' is : " + getUniqueLetterCount('Mahathi Kalakonda'));
}

main()