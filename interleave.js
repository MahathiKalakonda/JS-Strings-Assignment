function insertDelimiter(text, delimiter)
{
    let resultText = text[0];
    for(let index = 1; index < text.length; index++)
    {
        resultText=resultText + delimiter + text[index];
    }
    return resultText;
}

function main()
{
    console.log("The word 'Mahathi' after inserting delimiter '$' is : " + insertDelimiter('Mahathi', '$'));
}

main();