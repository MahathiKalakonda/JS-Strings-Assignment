function getReverseString(string)
{
    let reversedString = "";
    for(let index = 0; index < string.length; index++)
    {
        let complimentaryIndex = string.length - index - 1;
        reversedString = reversedString.concat(string[complimentaryIndex]);
    }
    return reversedString;
}

function printReversedString(string, reversedString)
{
    console.log("Reverse of " + string +" is : " + reversedString);
}

function main()
{
    printReversedString("Mahathi", getReverseString("Mahathi"));
    printReversedString("Thank You", getReverseString("Thank You"));
}

main();