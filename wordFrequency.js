function computeWordFrequency(sentence, word)
{
    let words = sentence.split(" "), frequency = 0;
    for(let index = 0; index < words.length; index++)
    {
        if(words[index] == word)
            frequency++;
    }
    return frequency;
}

function main()
{
    console.log("The frequency of 'hello' in 'hello hello' is : " + computeWordFrequency('hello hello', 'hello'));
    console.log("The frequency of 'hello' in 'Hello World' is : " + computeWordFrequency('Hello World', 'hello'));
}

main()