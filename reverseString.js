function getReverseWord(word)
{
    let reversedWord = '';
    reversedWord = word.split('').reduce(function(reversedWord,element)
                        {   return element+reversedWord;
                        });
    return reversedWord;
}

function main()
{
    console.log("Reverse of Mahathi is : " + getReverseWord("Mahathi"));
    console.log("Reverse of Thank You is : " + getReverseWord("Thank You"));
}

module.exports = {
         getReverseWord
         };