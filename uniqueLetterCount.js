function computeUniqueElementCount(elements)
{
    let letters = new Set(elements);
    return Array.from(letters).length;
}

function getUniqueLetterCount(sentence)
{
    let lowerCaseSentence = sentence.toLowerCase(), pattern = /[a-z]/g;
    let uniqueLetterCount = computeUniqueElementCount(lowerCaseSentence.match(pattern));
    return uniqueLetterCount;
}

function main()
{
    console.log("Number of unique letters in 'HelLo WorLd' is : " + getUniqueLetterCount('HelLo WorLd'));
    console.log("Number of unique letters in 'Mahathi Kalakonda' is : " + getUniqueLetterCount('Mahathi Kalakonda'));
}

main()