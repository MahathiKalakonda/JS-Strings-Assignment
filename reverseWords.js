object = require('./reverseString');

function reverseWords(sentence)
{
    return sentence.split(" ").reduce(function(reverseWordSentence, word)
            {   return reverseWordSentence + object.getReverseWord(word) + " ";
            }, '');
}

function main()
{
    console.log("Reversed Words of Hello World is : " + reverseWords("Hello World"));
    console.log("Reversed Words of This is Mahathi is : " + reverseWords("This is Mahathi"));
}

main();