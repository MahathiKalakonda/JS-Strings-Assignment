function stripAtEnd(words)
{
    let index = words.length - 1;
    while(words[index] == '')
    {
        words.pop();
        index--;
    }
    return words;
}

function getStripedSentence(sentence)
{
    let words = sentence.split(" ");
    words = stripAtEnd(words);
    words = stripAtEnd(words.reverse());
    words = words.reverse();
    return words.join(" ");
}

function main()
{
    let sentence = '    Mahathi Kalakonda     '
    console.log("Striped sentence of " + sentence + " is : " + getStripedSentence(sentence));
}

main();