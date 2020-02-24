function isSameCharacter(character1, character2)
{
    return character1 == character2;
}

function isPalindrome(word)
{
    let loopTurns = word.length/2;
    for(let index = 0; index < loopTurns; index++)
    {
        let complimentaryIndex = word.length - index - 1;
        if(!isSameCharacter(word[index], word[complimentaryIndex]))
            return false;
    }
    return true;
}

function printIsPalindrome(word, palindromeStatus)
{
    console.log(word + " is palindrome : " + palindromeStatus)
}

function main()
{
    printIsPalindrome("madam", isPalindrome("madam"));
    printIsPalindrome("Madam", isPalindrome("Madam"));
}

main()