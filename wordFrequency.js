function isSame(firstWord, secondWord)
{
    return firstWord.split("").every(function (element, index)
                    {
                    return element == this[index];
                    },secondWord);
}

function computeWordFrequency(sentence, word)
{
    let words = sentence.split(" ");
    return words.reduce(function (frequency, element)
                   {
                   return isSame(element, word) ? ++frequency : frequency;
                   },0);
}

function main()
{
    console.log("The frequency of 'hello' in 'hello hello' is : " + computeWordFrequency('hello hello', 'hello'));
    console.log("The frequency of 'hello' in 'Hello World' is : " + computeWordFrequency('Hello World', 'hello'));
}

main()