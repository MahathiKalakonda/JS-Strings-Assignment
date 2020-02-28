function insertDelimiter(text, delimiter)
{
    return text.split("").reduce(function(resultText, element)
                        {
                            return resultText.concat(delimiter,element);
                        });
}

function main()
{
    console.log("The word 'Mahathi' after inserting delimiter '$' is : " + insertDelimiter('Mahathi', '$'));
}

main();