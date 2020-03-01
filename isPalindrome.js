function isPalindrome(word)
{
    return word.split('').every(function(element, index, letters)
                    {   return element == letters[letters.length - index - 1];
                    });
}

function main()
{
    console.log("madam is palindrome : " + isPalindrome("madam"));
    console.log("Madam is palindrome : " + isPalindrome("Madam"));
}

main();